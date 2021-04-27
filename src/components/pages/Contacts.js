import React,{Component} from 'react';
import Contact from './Contact'




const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
},
{
    firstName: "Біллі",
    lastName: "Геррінґтон",
    phone: "+380881488228",
    gender: "male"
},
{
    firstName: "Ван",
    lastName: "Даркхолм",
    phone: "+380967381574",
    gender: "male"
},
{
    firstName: "Рікардо",
    lastName: "Мілос",
    phone: "+380668519536",
    gender: "male"
}];
contacts.map(contact=>!contact.gender?contact.gender="none":contact.gender)
class Contacts extends Component{

    state = {
        contactsBook: contacts,
        res:"",
         
    }
    searching = e => {
        this.setState({res: e.target.value})
        
    }
     
    

    render(){
        let book
        const result =this.state.res;
        book = result!==""? this.state.contactsBook.filter(contact=>contact.firstName.toLowerCase().includes(result.toLowerCase())||contact.lastName.toLowerCase().includes(result.toLowerCase())||contact.phone.includes(result)):this.state.contactsBook
        return(
            <div>
            <div className="searchline">
            <input type="text" className="search" onChange={this.searching}/>
            <button></button>
        </div>
          
            <div className="contact-book">
                {book.map((contact, i)=><Contact contact={contact} key={i}  />)}
            </div>
            </div>
        )
    }
}

export default Contacts;