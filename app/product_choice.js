"use client";
import {Navigate, Link} from 'react-router-dom';

import './globals.css';
import { useState , useEffect} from "react";
import axios from "axios";
import Image from 'next/image'
import Avatar from 'react-avatar';
import { useRef } from 'react';
import Select from 'react-select';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ReactFlow, { Controls, Background } from 'reactflow';
import 'reactflow/dist/style.css';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


// import window_to_test from '../testing.js';

const api = axios.create({
    baseURL: 'http://localhost:4001'
  });



if (typeof sessionStorage !== 'undefined') {
  
  if(sessionStorage.getItem("page_name2") == null)
  {
    sessionStorage.setItem("page_name2", ":param");
  }
  
  }



  


let product_select = ":param";


function Research_field(){

  const [title, set_title] = useState(["Mr.","Mrs.", "Miss"]);
  const [selected_title, set_selected_title] = useState("");

  const [surname, set_surname] = useState("");

  const [given_name, set_given_name] = useState("");

  const [middle_name, set_middle_name] = useState("");

  const [place_of_birth_text, set_place_of_birth_text] = useState("");

  const [email, set_email] = useState("");

  const [gender, set_gender] = useState(["Male","Female"]);
  const [selected_gender, set_selected_gender] = useState("");

  // const [listofproductName, set_listofproductName] = useState([""]);
  // let tab= [], tab1= [] ;
  // const [selectedProduct, setSelectedProduct] = useState('');
  // const [Product, setProduct] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // const [showModal2, setShowModal2] = useState(false);
  const [startDate, setStartDate] = useState(new Date());


  const handleChangeProductName = (event) => {
    set_productName(event.target.value);
  };


const handleSelectProduct = (e) => {
  setSelectedProduct(e.target.value);
  sessionStorage.setItem("page_name2", e.target.value);
  product_select = e.target.value;
  // console.log("LEPRODUIT",product_select);
};


useEffect(() => {

  // getlistofProductName();

 }, []);



const handleSelectedTitle = (e) => {
  set_selected_title(e.target.value);
  console.log(startDate);
};

const handleChangeSurname = (e) => {
  set_surname(e.target.value);
};

const handleChangeGivenName = (e) => {
  set_given_name(e.target.value);
};


const handleChangeMiddleName = (e) => {
  set_middle_name(e.target.value);
};

const handleChangePlaceOfBirth = (e) => {
  set_place_of_birth_text(e.target.value);
};


const handleChangeEmail = (e) => {
  set_email(e.target.value);
};



const handleSelectedGender = (e) => {
  set_selected_gender(e.target.value);
};



function handleSubmit2()
{
  setShowModal2(true);
}

return(
      <>
      <div className="">

        <div className="page_title">
          <center>
            <br></br>
            <span style={{color: 'black', fontWeight:'bold', fontSize:'14px'}}>Form File | Personal info</span>
            <p style={{color: 'black', fontSize:'12px'}}> 2024 - 2025</p>
          </center>
        </div>
     
        <form className="student_info" onSubmit={handleSubmit2} style={{fontSize:"12px",position:'absolute', color: 'black', overflow:'auto'}} >
          <center>
            <span>Personal Details</span>
          </center>
          <br></br><br></br> 

          <div style={{position:'absolute', marginLeft:'5%', width:'90%', height:'90%'}}>

            <label  htmlFor='title' ><b>1. Title: <span style={{color:'red'}}>*</span> </b></label>
                  <br></br>
                  <select  value={selected_title} onChange={handleSelectedTitle} style={{borderRadius:'0px', width: '18%',marginRight:'70px'}} className='beautiful-input4'>
                    <option value={" "}> Choose an option </option>
                      {
                        title.map((option, index) => (<option key={index} value={option} > {option} </option>))
                      }
                  </select>


            <br></br> <br></br> 
              <div style={{display:'flex', flexDirection:'row'}}>
                  <div style={{marginRight:'15px', width:'30%' }}>
                    <label htmlFor='surname' ><b>2. Surname: <span style={{color:'red'}}>*</span> </b></label>
                    <br></br>
                      <input onChange={handleChangeSurname} value={surname} id='surname' type="text" name="surname" className='beautiful-input5' style={{borderRadius:'0px', width: '100%'}}></input>
                  </div>  
              
                <div style={{width:'30%', marginRight:'15px' }}>
                  <label htmlFor='given_name'><b>3. Given name: <span style={{color:'red'}}>*</span> </b></label>
                  <br></br>
                    <input onChange={handleChangeGivenName} value={given_name} type="text" id= "given_name" name="given_name"  className='beautiful-input5' style={{borderRadius:'0px', width: '100%'}}></input>
                </div>

                <div style={{width:'30%' }}>
                  <label htmlFor='middle_name'><b>4. Middle name: </b></label>
                  <br></br>
                    <input onChange={handleChangeMiddleName} value={middle_name} type="text" id= "middle_name" name="middle_name"  className='beautiful-input5' style={{borderRadius:'0px', width: '100%'}}></input>
                </div>
                
              </div> 

              <br></br> 
              <div style={{display:'flex', flexDirection:'row'}}>

              <div style={{width:'30%', marginRight:'15px' }}>
                  <label htmlFor='place_of_birth'><b>5. Place of birth:<span style={{color:'red'}}>*</span> </b></label>
                  <br></br>
                    <input onChange={handleChangePlaceOfBirth} value={place_of_birth_text} type="text" id= "place_of_birth" name="place_of_birth"  className='beautiful-input5' style={{borderRadius:'0px', width: '100%'}}></input>
                </div>


                  <div style={{marginRight:'15px', width:'30%' ,color :'black' }}>
                    <label><b>6. Date of birth: <span style={{color:'red'}}>*</span> </b></label>
                    <br></br>
                      <DatePicker className='datepicking' selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>  
              
                

              </div>


              
              <br></br>
              <div style={{display:'flex', flexDirection:'row'}}>
              
                <div style={{width:'30%', marginRight:'15px'}}>
                  <label  htmlFor='title' ><b>7. Email: <span style={{color:'red'}}>*</span> </b></label>
                      
                  <br></br>
                    <input onChange={handleChangeEmail} value={email}  type="text" id= "middle_name" name="middle_name"  className='beautiful-input5' style={{borderRadius:'0px', width: '100%'}}></input>
   
                </div>
                
              </div> 


              <br></br>
              <div style={{display:'flex', flexDirection:'row'}}>
              
                <div style={{width:'18%', marginRight:'15px'}}>
                  <label  htmlFor='title' ><b>8. Gender: <span style={{color:'red'}}>*</span> </b></label>
                      
                      <select value={selected_gender} onChange={handleSelectedGender} style={{borderRadius:'0px', width: '100%',marginRight:'70px'}} className='beautiful-input4'>
                        <option value={" "}> Choose an option </option>
                          {
                            gender.map((option, index) => (<option key={index} value={option} > {option} </option>))
                          }
                      </select>
                </div>


              
              
                {/* <div style={{width:'30%', marginRight:'15px' }}>
                  <label htmlFor='place_of_birth'><b>5. Place of birth: <span style={{color:'red'}}>*</span> </b></label>
                  <br></br>
                    <input type="text" id= "place_of_birth" name="place_of_birth"  className='beautiful-input5' style={{borderRadius:'0px', width: '100%'}}></input>
                </div>

                <div style={{width:'30%' }}>
                  <label htmlFor='middle_name'><b>3. Middle name: </b></label>
                  <br></br>
                    <input type="text" id= "middle_name" name="middle_name"  className='beautiful-input5' style={{borderRadius:'0px', width: '100%'}}></input>
                </div> */}
                
              </div> 




              
               
              
            
            
          
              {/* <select value={selectedRole} onChange={handleAssignTo} className='beautiful-input4'>
                  <option value={" "}> Choose a role </option>
                    {
                      Role.map((option, index) => (<option key={index} value={option} > {option} </option>))
                    }
              </select> */}
              <p></p>
              <br></br>

              <button
              style={{
              backgroundColor: 'green',
              color: 'white',
              fontSize:'12px'
              }}
              className="link-arrow group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"> 
              Continue <p>&#10132;</p>
              </button>

            </div>

            <h2 style={{color:'black', fontSize:"10px", position:'absolute', marginTop:'560px', marginLeft:'44%'}}>2024-2025</h2>
        </form>
        <br></br><br></br>
        <br></br><br></br><br></br>
    
        
    
    </div>
      
      </>
);

}




























export default function Personal_Details() {

// Block();
// Detect_route_change();
  if(sessionStorage.getItem("login_name")==null)
  {
  
    return (
    <>
    <Navigate replace to="/" />;
    </>);
  }
  else{

    useEffect(() => {
      const handleClick = (event) => {
        // Get the clicked element
        const clickedElement = event.target;
  
        // Calculate the XPath
        const xpath = getXPath(clickedElement);
        
        // Log or use the XPath as needed
        console.log('XPath:', xpath);
      };
  
      // Attach the click event listener to the document
      document.addEventListener('click', handleClick);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('click', handleClick);
      };
    }, []);



    useEffect(() => {
      const handleNewWindowClick = (event) => {
        // Get the clicked element
        const clickedElement = event.target;
  
        // Calculate the XPath
        const xpath = getXPath(clickedElement);
        
        // Log or use the XPath as needed
        console.log('XPath:', xpath);
      };
  
      // Attach the click event listener to the document
      document.addEventListener('click', handleNewWindowClick);
  
      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('click', handleNewWindowClick);
      };
    }, []);
  
    // Function to compute XPath
    const getXPath = (element) => {
      if (!element || !element.tagName) return '';
      
      const parts = [];
      let current = element;
      
      while (current) {
        if (current.id) {
          parts.unshift(`id("${current.id}")`);
          break;
        } else {
          let index = 1;
          let sibling = current;
          
          while (sibling = sibling.previousElementSibling) {
            if (sibling.tagName === current.tagName) {
              index++;
            }
          }
          
          const tagName = current.tagName.toLowerCase();
          parts.unshift(`${tagName}[${index}]`);
          current = current.parentElement;
        }
      }
      
      return parts.join('/');
    };




    const openNewWindow = () => {
      // Open a new window
      const newWindow = window.open('https://google.com', '_blank', 'width=600,height=400');
    
      // Add an event listener to the new window to handle clicks
      newWindow.addEventListener('load', () => {
        newWindow.addEventListener('click', (event) => {
          // Calculate and send the XPath of the clicked element to the main window
          const xpath = getXPath(event.target);
          console.log('XPath:', xpath);
    
          // Post the XPath to the main window
          window.postMessage({ type: 'xpath', value: xpath }, '*');
        });
      });
    
      const getXPath = (element) => {
        if (!element || !element.tagName) return '';
        
        const parts = [];
        let current = element;
        
        while (current) {
          if (current.id) {
            parts.unshift(`id("${current.id}")`);
            break;
          } else {
            let index = 1;
            let sibling = current;
            
            while (sibling = sibling.previousElementSibling) {
              if (sibling.tagName === current.tagName) {
                index++;
              }
            }
            
            const tagName = current.tagName.toLowerCase();
            parts.unshift(`${tagName}[${index}]`);
            current = current.parentElement;
          }
        }
        return parts.join('/');
      };
    };


    // Add an event listener to the main window to handle messages
window.addEventListener('message', (event) => {
  if (event.data.type === 'xpath') {
    const receivedXPath = event.data.value;
    console.log('Received XPath:', receivedXPath);
  }
});
    

   

   
  
    // const getXPath = (element) => {
    //   if (!element || !element.tagName) return '';
      
    //   const parts = [];
    //   let current = element;
      
    //   while (current) {
    //     if (current.id) {
    //       parts.unshift(`id("${current.id}")`);
    //       break;
    //     } else {
    //       let index = 1;
    //       let sibling = current;
          
    //       while (sibling = sibling.previousElementSibling) {
    //         if (sibling.tagName === current.tagName) {
    //           index++;
    //         }
    //       }
          
    //       const tagName = current.tagName.toLowerCase();
    //       parts.unshift(`${tagName}[${index}]`);
    //       current = current.parentElement;
    //     }
    //   }
      
    //   return parts.join('/');
    // };
  
    // useEffect(() => {
    //   // Add an event listener to the main window to receive messages from the new window
    //   const handleMessage = (event) => {
    //     if (event.data && event.data.type === 'xpath') {
    //       // Handle the XPath received from the new window
    //       const receivedXPath = event.data.value;
    //       console.log('Received XPath:', receivedXPath);
  
    //       // Do whatever you need with the XPath in the main window
    //     }
    //   };
  
    //   window.addEventListener('message', handleMessage);
  
    //   // Clean up the event listener on component unmount
    //   return () => {
    //     window.removeEventListener('message', handleMessage);
    //   };
    // }, []);


    
      const handleFileUpload = (event) => {
        // get the selected file from the input
        const file = event.target.files[0];
        // console.log("Holy", event.target.files[0])
        // create a new FormData object and append the file to it
        const formData = new FormData();
        formData.append("file", file);
        console.log("Holy 2", formData)
        // make a POST request to the File Upload API with the FormData object and Rapid API headers
        api.post("/save_image", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
        // handle the response
            // console.log(response);
          })
          .catch((error) => {
            // handle errors
            console.log(error);
          });
      };
  
  
      const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
      ];

      const [selectedOption, setSelectedOption] = useState(null);

      function showSel()
      {
        console.log("Holy", selectedOption);
      }

  
      let y = "2023-02-14T23:00:00.000Z"

      const [value, setValue] = useState(new Date('2023-02-21T23:00:00.000Z'));

      function onChange(nextValue) {
        let p = nextValue.toJSON()
        console.log("Date JSON", p);
        // console.log("Date UTC", new Date(p).toUTCString());
        setValue(nextValue);
      }



      const edges = [{ id: '1-2', source: '1', target: '2', label: 'to the', type: 'step' }];

const nodes = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'World' },
    position: { x: 100, y: 100 },
  },
];

    return(
      <>
      
      <title> Student's Details </title>
      <div></div>
      {/* <input type="file" onChange={handleFileUpload} /> */}
      {/* <Sidebar_menu_all/> */}

      {/* <div style={{ height: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
    </div> */}

      {/* <div style={{}}>
      <Calendar onChange={onChange} value={value} />
    </div> */}

      

      
      
      <main className="flex-col items-center justify-between p-24" style={{height: "100vh", display: "flex"}}>
      {/* <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div> */}

      {/* <div>
      <input type="file" onChange={handleFileUpload}> Input </input>
    </div> */}

    {/* <div className="App"> */}
            {/* <h2>Add Image:</h2> */}
            
        {/* </div> */}
        

      <Research_field  />

      {/* <Detect_route_change/> */}
      {/* <MyComponent/> */}
      {/* <Avatar name={sessionStorage.getItem("login_name")} size="50" round={true}/>       */}

      

   
    
      </main>
      </>
    );
    }
  
}
