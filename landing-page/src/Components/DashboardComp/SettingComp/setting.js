import React, { useState } from 'react'
import styles from './setting.module.css'
import { HiHome, HiOutlineDocumentText, HiOutlineTemplate } 
from 'react-icons/hi'
import {MdOutlineSaveAlt} from 'react-icons/md'
import Image from 'next/image'


const Setting = () => {
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
      <div className={styles.home}>
        <HiHome />
        <p>Dashboard / Setting</p>
      </div>
      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>General Information </label>
          <p>setting site information</p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divcont}>
            <label className={styles.label}>Admin Email</label>
            <input placeholder='' className={styles.input} />
          </div>

          <div className={styles.divcont}>
            <label className={styles.label}>Time Zone</label>
            <input placeholder='' className={styles.input} />
          </div>

          <div className={styles.divcont}>
            <label className={styles.label}>Site Language</label>
            <input placeholder='' className={styles.input} />
          </div>
        </div>
      </div>

      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>Admin appearance </label>
          <p>setting admin appearance such as editor language.... </p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divconts}>
            <div className={styles.divcont}>
              <p>Admin Logo</p>
              <label htmlFor="file-upload" className={styles.upload}>
                {showMediaInGallery()}
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept="image/*"
                  style={{ display: 'block' }}
                  id="file-upload"
                />
              </label>
            </div>
            <div className={styles.divcont}>
              <p>Admin Favicon</p>
              <label htmlFor="file-upload" className={styles.upload}>
                {showMediaInGallery()}
                <input
                  type="file"
                  onChange={handleFileUpload}
                  accept="image/*"
                  style={{ display: 'block' }}
                  id="file-upload"
                />
              </label>
            </div>

          </div>

          <div className={styles.divcont}>
            <p>Login Screen Backgrounds</p>
            <label htmlFor="file-upload" className={styles.upload}>
              {showMediaInGallery()}
              <input
                type="file"
                onChange={handleFileUpload}
                accept="image/*"
                style={{ display: 'block' }}
                id="file-upload"
              />
            </label>
          </div>


        </div>
      </div>

      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>Cache</label>
          <p>Config cache for system for optimize speed</p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divcont}>
            <label className={styles.label}>Enable cache?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="question" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="question" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>

          <div className={styles.divcont}>
            <label className={styles.label}>Cache admin menu?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="menu" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="menu" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>Datatables</label>
          <p>setting for datatables</p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divcont}>
            <label className={styles.label}>Default show column visibility?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="visible" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="visible" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>

          <div className={styles.divcont}>
            <label className={styles.label}>Default show export button?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="export" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="export" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>Optimize page speed </label>
          <p>Minify HTML output, inline CSS, remove comments....</p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divcont}>
            <label className={styles.label}>Enable optimize page speed?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="enable" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="enable" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>

        </div>
      </div>


      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>Theme</label>
          <p>Setting for theme</p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divcont}>
            <label className={styles.label}>Enable cache site map</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="map" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="map" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>
          <div className={styles.divcont}>
          <div className={styles.contput}>
            <label className={styles.label}>Cache Time Site map (minutes)</label>
            <input placeholder=''  className={styles.inputs}/>
          </div>
          </div>

          <div className={styles.divcont}>
            <label className={styles.label}>Redirect all not found requests to homepage?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="home" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="home" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>

          <div className={styles.divcont}>
            <label className={styles.label}>Show guidelines?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="show" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="show" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>
        </div>
      </div>

      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>Newletters</label>
          <p>Settings for newsletter (auto send newsletter email to SendGrid, Mailchimp... when someone register newsletter on website).</p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divcont}>
            <label className={styles.label}>Enable newsletter contacts list API?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="contact" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="contact" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>

        </div>
      </div>

      <div className={styles.subcont}>
        <div className={styles.contone}>
          <label className={styles.labels}>Captcha</label>
          <p>Setting for Google Captcha</p>
        </div>
        <div className={styles.contwo}>
          <div className={styles.divcont}>
            <label className={styles.label}>Enable Captcha?</label>

            <div className={styles.radiocont}>
              <div className={styles.radio}>
              <input type="radio" id="yes" value="yes" name="settings" />
              <label htmlFor="yes">Yes</label>
              </div>
             
              <div className={styles.radio}>
             <input type="radio" id="no" value="no" name="settings" />
              <label htmlFor="no">No</label>
             </div>

             
            </div>
          </div>

        </div>
      </div>

      <div className={styles.subconts}>
        <div className={styles.contones}>
          
        </div>
        <div className={styles.contwos}>
        <div className={styles.buttoncont}>
        <button className={styles.button}>
        <MdOutlineSaveAlt />
          Save Changes</button>
      </div>

        </div>
      </div>

      



    </div>
  )
}

export default Setting