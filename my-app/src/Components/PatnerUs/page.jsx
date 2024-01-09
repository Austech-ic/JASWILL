import React,{ useState } from 'react'
import styles from './page.module.css'
import Image from 'next/image';

const Page = () => {


  const [selectedMedia, setSelectedMedia] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedMedia(file); // Update state with the selected file
  };

  const showMediaInGallery = () => {
    // Show the selected image inside the div when the "Choose File" label is clicked
    if (selectedMedia) {
      return (
        <div className="mt-3">
          <Image
          width={200}
          height={200}
            src={URL.createObjectURL(selectedMedia)}
            alt="Selected Thumbnail"
            className={styles.image}
          />
        </div>
      );
    }
  };
  return (
    <div className={styles.main}>
        <div>
            <p className={styles.label}>Partner With Us</p>
            <p className={styles.text}>We boast a great number of partners and affiliate marketers who are achieving huge financial results for themselves on a monthly basis. Want to make real estate your side gig? We will support you every step of the way. Kindly fill out the form below:</p>
            <div className={styles.formcont}>
              <form action="" >
                <div className={styles.form}>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Full Name</label>
                  <input type="text" placeholder='Name' className={styles.input} />
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Address</label>
                  <input type="text" placeholder='(Street, City, State, Postal Code, Country)' className={styles.input} />
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Type of Partner</label>
                  <input type="text" placeholder='Individual/Company' className={styles.input} />
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Email</label>
                  <input type="email" placeholder='Email' className={styles.input} />
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Phone</label>
                  <input type="text" placeholder='+234-3333-333-333' className={styles.input}/>
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Bank Name</label>
                  <input type="text" className={styles.input} />
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Account Name</label>
                  <input type="text" className={styles.input}/>
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Account Number</label>
                  <input type="text" className={styles.input} />
                </div>
                <div className={styles.divcont}>
                  <label htmlFor="" className={styles.labeltext}>Date of Registration</label>
                  <input type="text" className={styles.input} />
                </div>
                {/* <p>hello</p> */}
                <div className={styles.divconts}>
                 
                  <div className="">
                  {showMediaInGallery()}
          <input
            type="file"
            onChange={handleFileUpload}
            accept=""
            style={{ display: 'block' }}
            id="file-upload"
          />
                    {/* <label
                      htmlFor="file-upload"
                      className="flex justify-center items-center gap-6 bg-transparent text-gray-700 rounded-xl h-20 w-40 text-sm md:text-max outline-dotted outline-gray-400"
                    >
                      Upload Video
                    </label> */}
                  </div>
                </div>
                </div>
                <div className={styles.buttoncont}>
                  <button>
                    Submit
                  </button>
                </div>
              </form>
            </div>
        </div>
    </div>
  )
}

export default Page