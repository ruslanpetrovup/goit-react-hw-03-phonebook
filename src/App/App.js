import React from 'react';
import ReactDOM from 'react-dom'
import { v4 as uuidv4 } from 'uuid';
import AddedBtn from '../addedBtn/AddedBtn'
import Filter from '../filter/Filter'

class Contacts extends React.Component {
    state = {
        contacts: [],
        name: '',
        number: '',
        filter: ''
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
         if (prevState.contacts !== localStorage.getItem('contacts')) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }
        ReactDOM.render(this.state.contacts === null ? null : this.state.contacts.map(num => <li><span>{num.name}</span>: {num.number} <button type="button" id={num.idCont} onClick={this.deleteContact}>Delete</button></li>), document.getElementById('Contacts'));
    }
    componentDidMount() {
         this.setState({
            contacts: JSON.parse(localStorage.getItem('contacts'))
       })
        setTimeout(() => {
            this.renderContacts()
        }, 1000)
        
        
   }
    valueName = (even) => {
        this.setState({
            name: even.target.value
        })
    }
    valueNumber = (even) => {
        this.setState({
            number: even.target.value
        })

    }
    valueFilter = (even) => {
        this.setState({
            filter: even.target.value
        })
        this.filterContacts();

    }
    addNameContact = () => {
        this.clear()
        if (this.state.contacts === null || this.state.contacts.find(num => num.name.toLowerCase() === this.state.name.toLowerCase()) === undefined) {

        } else {
            alert('Its name never used');
            return
        }
        this.setState((state, props) => {
            return {contacts: [...this.state.contacts, { idCont: uuidv4(), name: this.state.name, number: this.state.number}]};
        });
        setTimeout(() => {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
        }, 2000)
        this.renderContacts();
    }
    clear = () => {
       const clearName = document.getElementById('valueName');
        const clearNumber = document.getElementById('valueNumber');
        clearName.value = '';
        clearNumber.value = '';
    }
    filterContacts = () => {
        if (this.state.filter.length === 1) {
            this.renderContacts()
            return
        }
       const filterEl = this.state.contacts.filter(num => num.name.toLowerCase().includes(this.state.filter.toLowerCase()))
       ReactDOM.render(filterEl.map(num => <li><span>{num.name}</span>: {num.number} <button type="button" id={num.idCont} onClick={this.deleteContact}>Delete</button></li>), document.getElementById('Contacts'));
    }
    deleteContact = (idDelete) => {
        this.setState({
            contacts: this.state.contacts.filter(num => num.idCont !== idDelete.target.id)
        })
        setTimeout(() => {
            this.renderContacts()
        }, 250)
    }
    renderContacts = () => {
        ReactDOM.render(this.state.contacts === null ? null : this.state.contacts.map(num => <li><span>{num.name}</span>: {num.number} <button type="button" id={num.idCont} onClick={this.deleteContact}>Delete</button></li>), document.getElementById('Contacts'));
        
    }
    render(){
        return (
            <>
                <AddedBtn valueName={this.valueName} valueNumber={this.valueNumber} addNameContact={this.addNameContact}/>
                <Filter valueFilter={this.valueFilter}/>
            </>
        )
    }
}
export default Contacts
