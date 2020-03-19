using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ContactInformation.Models;

namespace ContactInformation.Repositories
{
    public interface IContactRepository
    {
        IEnumerable<Contact> GetContacts();
        Contact GetContactByID(int id);
        void NewContact(Contact contact);
        void UpdateContact(Contact contact);
        void DeleteContact(int id);
        void Save();
    }
}
