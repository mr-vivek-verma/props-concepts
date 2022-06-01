import React from "react";

export default function Contact(props) {
  return (
    <div className="contact-card">
      <img src={props.img} alt="img" />
      <h3>{props.name}</h3>
      <div className="info-group">
        <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <p>{props.email}</p>
      </div>
    </div>
  );
}

//*****************Destructuring Concept************************** */

// export default function Contact({img, name, phone, email}) {
//   return (
//       <div className="contact-card">
//           <img src={img}/>
//           <h3>{name}</h3>
//           <div className="info-group">
//               <img src="./images/phone-icon.png" />
//               <p>{phone}</p>
//           </div>
//           <div className="info-group">
//               <img src="./images/mail-icon.png" />
//               <p>{props.email}</p>
//           </div>
//       </div>
//   )
// }
