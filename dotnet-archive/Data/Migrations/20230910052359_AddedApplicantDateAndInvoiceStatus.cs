using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace VTMUNC.Data.Migrations
{
    public partial class AddedApplicantDateAndInvoiceStatus : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "Date",
                table: "Applicant",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "InvoiceStatus",
                table: "Applicant",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Date",
                table: "Applicant");

            migrationBuilder.DropColumn(
                name: "InvoiceStatus",
                table: "Applicant");
        }
    }
}
