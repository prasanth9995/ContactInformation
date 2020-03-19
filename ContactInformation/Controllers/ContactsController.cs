using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ContactInformation.Models;
using ContactInformation.Repositories;

namespace ContactInformation.Controllers
{
    public class ContactsController : ApiController
    {
        private IContactRepository _contactRepository;

        public ContactsController()
        {
            _contactRepository = new ContactRepository(new ContactContext());
        }
        public ContactsController(ContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }


        // GET: api/Contacts
        public IEnumerable<Contact> GetContacts()
        {
            return _contactRepository.GetContacts();
        }

        // GET: api/Contacts/5
        [ResponseType(typeof(Contact))]
        public IHttpActionResult GetContact(int id)
        {
            Contact contact = _contactRepository.GetContactByID(id);
            if (contact == null)
            {
                return NotFound();
            }

            return Ok(contact);
        }

        // PUT: api/Contacts/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContact(int id, Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contact.Id)
            {
                return BadRequest();
            }


            _contactRepository.UpdateContact(contact);

            try
            {
                _contactRepository.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Contacts
        [ResponseType(typeof(Contact))]
        public IHttpActionResult PostContact(Contact contact)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            _contactRepository.NewContact(contact);

            return CreatedAtRoute("DefaultApi", new { id = contact.Id }, contact);
        }

        // DELETE: api/Contacts/5
        [ResponseType(typeof(Contact))]
        public IHttpActionResult DeleteContact(int id)
        {
            _contactRepository.DeleteContact(id);
            return Ok();
        }
    }
}