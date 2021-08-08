import ContactForm from "./ContactForm"
import React,{useEffect,useState} from 'react';
import firebaseDb from "../firebase";
const Contacts = () => {
    var [contactObjects,setContactObjects] = useState({})

    useEffect(() => {
        firebaseDb.child('contacts').on('value',snapshot=>{
            if(snapshot.val()!=null)
            setContactObjects({
                ...snapshot.val()
            })
        })
    })

    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(obj, err =>{
            if(err) console.log(err)
        })
        console.log("THIS IS OBJ: ",obj)
    }
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Fluid jumbotron</h1>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm addOrEdit={addOrEdit}/>
                </div>
                <div className="col-md-7">
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                                <th>Full Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(contactObjects).map(key=>{
                                return <tr key={key}>
                                    <td>{contactObjects[key].fullName}</td>
                                    <td>{contactObjects[key].mobile}</td>
                                    <td>{contactObjects[key].emaile}</td>
                                    <td></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Contacts;