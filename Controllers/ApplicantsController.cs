using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using VTMUNC.Data;
using VTMUNC.Models;
using VTMUNC.ViewModels;

namespace VTMUNC.Controllers
{
    public class ApplicantsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public ApplicantsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: Applicants
        [Authorize]
        public async Task<IActionResult> Index()
        {
            if (_context.Applicant == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Applicant'  is null.");
            }
            List<Applicant> applicants = await _context.Applicant.ToListAsync();

            return View(new ApplicantsDashboard(applicants));
        }

        // GET: Applicants/Details/5
        [Authorize]
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null || _context.Applicant == null)
            {
                return NotFound();
            }

            var applicant = await _context.Applicant
                .FirstOrDefaultAsync(m => m.Id == id);
            if (applicant == null)
            {
                return NotFound();
            }

            return View(applicant);
        }

        // GET: Applicants/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Applicants/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("Id,AdvisorEmail,AdvisorName,AdvisorPhone,AdvisorRelation,AdvisorOtherInformation,HeadDelegateEmail,HeadDelegateName,HeadDelegatePhone,SchoolName,DelegationSize,SchoolMailingAddress,NamesOfDelegates,IsAgreeWithTerms,CommentsOrQuestions")] Applicant applicant)
        {
            applicant.Date = DateTime.Now;

            if (ModelState.IsValid)
            {
                _context.Add(applicant);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Success));
            }
            return View(applicant);
        }

        // GET: Applicants/Edit/5
        [Authorize]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null || _context.Applicant == null)
            {
                return NotFound();
            }

            var applicant = await _context.Applicant.FindAsync(id);
            if (applicant == null)
            {
                return NotFound();
            }
            return View(applicant);
        }

        // POST: Applicants/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> Edit(int id, [Bind("Id,Date,AdvisorEmail,AdvisorName,AdvisorPhone,AdvisorRelation,AdvisorOtherInformation,HeadDelegateEmail,HeadDelegateName,HeadDelegatePhone,SchoolName,DelegationSize,SchoolMailingAddress,NamesOfDelegates,IsAgreeWithTerms,CommentsOrQuestions,InvoiceStatus")] Applicant applicant)
        {
            if (id != applicant.Id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(applicant);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!ApplicantExists(applicant.Id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(applicant);
        }

        // GET: Applicants/Delete/5
        [Authorize]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null || _context.Applicant == null)
            {
                return NotFound();
            }

            var applicant = await _context.Applicant
                .FirstOrDefaultAsync(m => m.Id == id);
            if (applicant == null)
            {
                return NotFound();
            }

            return View(applicant);
        }

        // POST: Applicants/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        [Authorize]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            if (_context.Applicant == null)
            {
                return Problem("Entity set 'ApplicationDbContext.Applicant'  is null.");
            }
            var applicant = await _context.Applicant.FindAsync(id);
            if (applicant != null)
            {
                _context.Applicant.Remove(applicant);
            }
            
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool ApplicantExists(int id)
        {
          return (_context.Applicant?.Any(e => e.Id == id)).GetValueOrDefault();
        }

        // GET: Applicants/Success
        public IActionResult Success()
        {
            return View();
        }
    }
}
