using Microsoft.AspNetCore.Identity;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using VTMUNC.Data;
using VTMUNC.Models;

namespace VTMUNC
{
    public class Program
    {
        public static async Task Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Obtain connection string
            var connectionString = "";
            if (Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") != "Production")
            {
                connectionString = builder.Configuration.GetConnectionString("AZURE_SQL_CONNECTIONSTRING");
            }
            else
            {
                connectionString = Environment.GetEnvironmentVariable("CONNECTION_STRING");
            }
            System.Diagnostics.Debug.Assert(connectionString != null);

            // Add services to the container.
            builder.Services.AddDbContext<ApplicationDbContext>(options =>
                options.UseSqlServer(connectionString));
            builder.Services.AddDatabaseDeveloperPageExceptionFilter();

            builder.Services.AddDefaultIdentity<ApplicationUser>(options => options.SignIn.RequireConfirmedAccount = true)
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();
            builder.Services.AddControllersWithViews();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseMigrationsEndPoint();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}/{id?}");
            app.MapRazorPages();

            // Redirects staff.vtmunc.org to login page
            app.Use(async (context, next) =>
            {
                var isStaffDomain = context.Request.Host.Host.StartsWith("staff.", StringComparison.OrdinalIgnoreCase);
                if (isStaffDomain)
                {
                    string domainName = context.Request.Host.Value.Replace("staff.", "");
                    string destinationUrl = "https://" + domainName + "/Identity/Account/Login";

                    // Redirect to the destination URL
                    context.Response.Redirect(destinationUrl.ToString(), permanent: true);
                }
                await next.Invoke();
            });


            // Seeding Roles and Admin Account
            if (builder.Configuration["SEED_DATABASE"] != "false")
            {
                using (var scope = app.Services.CreateScope())
                {
                    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();

                    var roles = new[] { "Admin", "Secretariat" };

                    foreach (var role in roles)
                    {
                        if (!await roleManager.RoleExistsAsync(role))
                        {
                            await roleManager.CreateAsync(new IdentityRole(role));
                        }
                    }
                }

                // Decides to create admin based on preferences

                using (var scope = app.Services.CreateScope())
                {
                    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();

                    string email = "chargedaffaires@vtmunc.org";
                    string? password = builder.Configuration["ADMIN_PASSWORD"];


                    if (await userManager.FindByEmailAsync(email) == null)
                    {
                        var user = new ApplicationUser();
                        user.UserName = email;
                        user.Email = email;
                        user.EmailConfirmed = true;

                        await userManager.CreateAsync(user, password);

                        await userManager.AddToRoleAsync(user, "Admin");

                    }

                }
            }



            app.Run();
        }
    }
}