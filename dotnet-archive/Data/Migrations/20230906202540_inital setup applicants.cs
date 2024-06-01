using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VTMUNC.Data.Migrations
{
    public partial class initalsetupapplicants : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Applicant",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AdvisorEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdvisorName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdvisorPhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdvisorRelation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    AdvisorOtherInformation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HeadDelegateEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HeadDelegateName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    HeadDelegatePhone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SchoolName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DelegationSize = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    SchoolMailingAddress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    NamesOfDelegates = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IsAgreeWithTerms = table.Column<bool>(type: "bit", nullable: false),
                    CommentsOrQuestions = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Applicant", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Applicant");
        }
    }
}
