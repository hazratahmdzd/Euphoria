import React from 'react'
import personalInfoStyle from './PersonalInfo.module.scss'

const PersonalInfo = () => {
  return (
    <div className={personalInfoStyle.perIncontainer}>
        
        <h2>My Info</h2>
        <h3>Contact Details</h3>

        <form>
          <label htmlFor="perInfname">Your Name</label> 
        <div>
          <input type="text" id="perInfname" value="Jvanhi Shah" />
          Change
        </div>

        <label htmlFor="perInfemail">Email Address</label> 
        <div>
          <input type="email" id="perInfemail" value="Jhanvi@gmail.com" />
          Change
        </div>

        <label htmlFor="perInfphone">Phone Number</label> 
        <div>
          <input type="tel" id="perInfphone" value="8980252445" />
          Change
        </div>

        <label htmlFor="perInfpassword">Password</label> 
        <div>
          <input type="password" id="perInfpassword" value="8980252445" />
          Change
        </div>
        </form>

        <div className={personalInfoStyle.addressadding}>
        <div className={personalInfoStyle.addressaddingheader}>
         <span>Address</span>
         <span>Add New</span>
        </div>
        <div className={personalInfoStyle.addressaddingboxes}>
         <div>
            <p>Jhanvi shah</p>
            <p>8980252445</p>
            <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
         </div>
         <div>
         <p>Jhanvi shah</p>
            <p>8980252445</p>
            <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
         </div>
         <div>
         <p>Jhanvi shah</p>
            <p>8980252445</p>
            <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
         </div>
         <div>
         <p>Jhanvi shah</p>
            <p>8980252445</p>
            <p>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
         </div>
        </div>
        </div>
    </div>
  )
}

export default PersonalInfo