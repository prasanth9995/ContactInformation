using ContactInformation.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ContactInformation.Repositories
{
    public class ContactRepository:IContactRepository
    {
        private readonly ContactContext _dbContext;

        public ContactRepository()
        {
            _dbContext = new ContactContext();
        }
        public ContactRepository(ContactContext context)
        {
            _dbContext = context;
        }
        public IEnumerable<Contact> GetContacts()
        {
            return _dbContext.Contacts.ToList();
        }

        public Contact GetContactByID(int id)
        {
            return _dbContext.Contacts.Find(id);
        }


        public void NewContact(Contact contact)
        {
            _dbContext.Contacts.Add(contact);
            Save();
        }


        public void UpdateContact(Contact contact)
        {
            _dbContext.Entry(contact).State = EntityState.Modified;
        }
        public void DeleteContact(int id)
        {
            var contact= _dbContext.Contacts.Find(id);
            if (contact != null) _dbContext.Contacts.Remove(contact);
        }
        public void Save()
        {
            _dbContext.SaveChanges();
        }


        private bool _disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
            {
                if (disposing)
                {
                    _dbContext.Dispose();
                }
            }
            this._disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}