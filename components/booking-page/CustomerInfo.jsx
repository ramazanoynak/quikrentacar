// import Link from "next/link";
// import BookingDetails from "./sidebar/BookingDetails";

// const CustomerInfo = ({ formik }) => {
//   return (
//     <>
//       <div className="col-xl-7 col-lg-8 mt-30">
//         {/* <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
//           Sign in to book with your saved details or{" "}
//           <Link href="/signup" className="text-blue-1 fw-500">
//             register
//           </Link>{" "}
//           to manage your bookings on the go!
//         </div> */}
//         {/* End register notify */}

//         <h2 className="text-22 fw-500 mt-40 md:mt-24">
//           Let us know who you are
//         </h2>

//         <div className="row x-gap-20 y-gap-20 pt-20">
//           <div className="col-12">
//             <div className="row">
//               <div className=" col-md-6">
//                 <div className="form-input">
//                   <input
//                     type="text"
//                     name="first_name"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     required
//                   />
//                   <label className="lh-1 text-16 text-light-1">
//                     First Name
//                   </label>
//                 </div>
//                 {formik.errors.first_name && formik.touched.first_name && (
//                   <div className="text-danger">{formik.errors.first_name}</div>
//                 )}
//               </div>
//               <div className=" col-md-6">
//                 <div className="form-input">
//                   <input
//                     type="text"
//                     name="last_name"
//                     onChange={formik.handleChange}
//                     onBlur={formik.handleBlur}
//                     required
//                   />
//                   <label className="lh-1 text-16 text-light-1">Last Name</label>
//                 </div>
//                 {formik.errors.last_name && formik.touched.last_name && (
//                   <div className="text-danger">{formik.errors.last_name}</div>
//                 )}
//               </div>
//             </div>
//           </div>
//           {/* End col-12 */}

//           <div className=" col-md-6">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="email"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 required
//               />
//               <label className="lh-1 text-16 text-light-1">Email</label>
//             </div>
//             {formik.errors.email && formik.touched.email && (
//               <div className="text-danger">{formik.errors.email}</div>
//             )}
//           </div>
//           {/* End col-12 */}

//           <div className=" col-md-6">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="phone_number"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 required
//               />
//               <label className="lh-1 text-16 text-light-1">Phone Number</label>
//             </div>
//             {formik.errors.phone_number && formik.touched.phone_number && (
//               <div className="text-danger">{formik.errors.phone_number}</div>
//             )}
//           </div>
//           {/* End col-12 */}
//           {/* End col-12 */}

//           {/* <div className="col-md-6">
//             <div className="dropdown js-dropdown">
//               <select
//                 name="country"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 style={{ minHeight: "70px" }}
//                 className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14"
//               >
//                 <option defaultValue>Select Country</option>
//                 <option value="Afghanistan">Afghanistan</option>
//                 <option value="Åland Islands">Åland Islands</option>
//                 <option value="Albania">Albania</option>
//                 <option value="Algeria">Algeria</option>
//                 <option value="American Samoa">American Samoa</option>
//                 <option value="Andorra">Andorra</option>
//                 <option value="Angola">Angola</option>
//                 <option value="Anguilla">Anguilla</option>
//                 <option value="Antarctica">Antarctica</option>
//                 <option value="Antigua and Barbuda">Antigua and Barbuda</option>
//                 <option value="Argentina">Argentina</option>
//                 <option value="Armenia">Armenia</option>
//                 <option value="Aruba">Aruba</option>
//                 <option value="Australia">Australia</option>
//                 <option value="Austria">Austria</option>
//                 <option value="Azerbaijan">Azerbaijan</option>
//                 <option value="Bahamas">Bahamas</option>
//                 <option value="Bahrain">Bahrain</option>
//                 <option value="Bangladesh">Bangladesh</option>
//                 <option value="Barbados">Barbados</option>
//                 <option value="Belarus">Belarus</option>
//                 <option value="Belgium">Belgium</option>
//                 <option value="Belize">Belize</option>
//                 <option value="Benin">Benin</option>
//                 <option value="Bermuda">Bermuda</option>
//                 <option value="Bhutan">Bhutan</option>
//                 <option value="Bolivia">Bolivia</option>
//                 <option value="Bosnia and Herzegovina">
//                   Bosnia and Herzegovina
//                 </option>
//                 <option value="Botswana">Botswana</option>
//                 <option value="Bouvet Island">Bouvet Island</option>
//                 <option value="Brazil">Brazil</option>
//                 <option value="British Indian Ocean Territory">
//                   British Indian Ocean Territory
//                 </option>
//                 <option value="Brunei Darussalam">Brunei Darussalam</option>
//                 <option value="Bulgaria">Bulgaria</option>
//                 <option value="Burkina Faso">Burkina Faso</option>
//                 <option value="Burundi">Burundi</option>
//                 <option value="Cambodia">Cambodia</option>
//                 <option value="Cameroon">Cameroon</option>
//                 <option value="Canada">Canada</option>
//                 <option value="Cape Verde">Cape Verde</option>
//                 <option value="Cayman Islands">Cayman Islands</option>
//                 <option value="Central African Republic">
//                   Central African Republic
//                 </option>
//                 <option value="Chad">Chad</option>
//                 <option value="Chile">Chile</option>
//                 <option value="China">China</option>
//                 <option value="Christmas Island">Christmas Island</option>
//                 <option value="Cocos (Keeling) Islands">
//                   Cocos (Keeling) Islands
//                 </option>
//                 <option value="Colombia">Colombia</option>
//                 <option value="Comoros">Comoros</option>
//                 <option value="Congo">Congo</option>
//                 <option value="Congo, The Democratic Republic of The">
//                   Congo, The Democratic Republic of The
//                 </option>
//                 <option value="Cook Islands">Cook Islands</option>
//                 <option value="Costa Rica">Costa Rica</option>
//                 <option value="Cote D'ivoire">Cote D'ivoire</option>
//                 <option value="Croatia">Croatia</option>
//                 <option value="Cuba">Cuba</option>
//                 <option value="Cyprus">Cyprus</option>
//                 <option value="Czech Republic">Czech Republic</option>
//                 <option value="Denmark">Denmark</option>
//                 <option value="Djibouti">Djibouti</option>
//                 <option value="Dominica">Dominica</option>
//                 <option value="Dominican Republic">Dominican Republic</option>
//                 <option value="Ecuador">Ecuador</option>
//                 <option value="Egypt">Egypt</option>
//                 <option value="El Salvador">El Salvador</option>
//                 <option value="Equatorial Guinea">Equatorial Guinea</option>
//                 <option value="Eritrea">Eritrea</option>
//                 <option value="Estonia">Estonia</option>
//                 <option value="Ethiopia">Ethiopia</option>
//                 <option value="Falkland Islands (Malvinas)">
//                   Falkland Islands (Malvinas)
//                 </option>
//                 <option value="Faroe Islands">Faroe Islands</option>
//                 <option value="Fiji">Fiji</option>
//                 <option value="Finland">Finland</option>
//                 <option value="France">France</option>
//                 <option value="French Guiana">French Guiana</option>
//                 <option value="French Polynesia">French Polynesia</option>
//                 <option value="French Southern Territories">
//                   French Southern Territories
//                 </option>
//                 <option value="Gabon">Gabon</option>
//                 <option value="Gambia">Gambia</option>
//                 <option value="Georgia">Georgia</option>
//                 <option value="Germany">Germany</option>
//                 <option value="Ghana">Ghana</option>
//                 <option value="Gibraltar">Gibraltar</option>
//                 <option value="Greece">Greece</option>
//                 <option value="Greenland">Greenland</option>
//                 <option value="Grenada">Grenada</option>
//                 <option value="Guadeloupe">Guadeloupe</option>
//                 <option value="Guam">Guam</option>
//                 <option value="Guatemala">Guatemala</option>
//                 <option value="Guernsey">Guernsey</option>
//                 <option value="Guinea">Guinea</option>
//                 <option value="Guinea-bissau">Guinea-bissau</option>
//                 <option value="Guyana">Guyana</option>
//                 <option value="Haiti">Haiti</option>
//                 <option value="Heard Island and Mcdonald Islands">
//                   Heard Island and Mcdonald Islands
//                 </option>
//                 <option value="Holy See (Vatican City State)">
//                   Holy See (Vatican City State)
//                 </option>
//                 <option value="Honduras">Honduras</option>
//                 <option value="Hong Kong">Hong Kong</option>
//                 <option value="Hungary">Hungary</option>
//                 <option value="Iceland">Iceland</option>
//                 <option value="India">India</option>
//                 <option value="Indonesia">Indonesia</option>
//                 <option value="Iran, Islamic Republic of">
//                   Iran, Islamic Republic of
//                 </option>
//                 <option value="Iraq">Iraq</option>
//                 <option value="Ireland">Ireland</option>
//                 <option value="Isle of Man">Isle of Man</option>
//                 <option value="Israel">Israel</option>
//                 <option value="Italy">Italy</option>
//                 <option value="Jamaica">Jamaica</option>
//                 <option value="Japan">Japan</option>
//                 <option value="Jersey">Jersey</option>
//                 <option value="Jordan">Jordan</option>
//                 <option value="Kazakhstan">Kazakhstan</option>
//                 <option value="Kenya">Kenya</option>
//                 <option value="Kiribati">Kiribati</option>
//                 <option value="Korea, Democratic People's Republic of">
//                   Korea, Democratic People's Republic of
//                 </option>
//                 <option value="Korea, Republic of">Korea, Republic of</option>
//                 <option value="Kuwait">Kuwait</option>
//                 <option value="Kyrgyzstan">Kyrgyzstan</option>
//                 <option value="Lao People's Democratic Republic">
//                   Lao People's Democratic Republic
//                 </option>
//                 <option value="Latvia">Latvia</option>
//                 <option value="Lebanon">Lebanon</option>
//                 <option value="Lesotho">Lesotho</option>
//                 <option value="Liberia">Liberia</option>
//                 <option value="Libyan Arab Jamahiriya">
//                   Libyan Arab Jamahiriya
//                 </option>
//                 <option value="Liechtenstein">Liechtenstein</option>
//                 <option value="Lithuania">Lithuania</option>
//                 <option value="Luxembourg">Luxembourg</option>
//                 <option value="Macao">Macao</option>
//                 <option value="Macedonia, The Former Yugoslav Republic of">
//                   Macedonia, The Former Yugoslav Republic of
//                 </option>
//                 <option value="Madagascar">Madagascar</option>
//                 <option value="Malawi">Malawi</option>
//                 <option value="Malaysia">Malaysia</option>
//                 <option value="Maldives">Maldives</option>
//                 <option value="Mali">Mali</option>
//                 <option value="Malta">Malta</option>
//                 <option value="Marshall Islands">Marshall Islands</option>
//                 <option value="Martinique">Martinique</option>
//                 <option value="Mauritania">Mauritania</option>
//                 <option value="Mauritius">Mauritius</option>
//                 <option value="Mayotte">Mayotte</option>
//                 <option value="Mexico">Mexico</option>
//                 <option value="Micronesia, Federated States of">
//                   Micronesia, Federated States of
//                 </option>
//                 <option value="Moldova, Republic of">
//                   Moldova, Republic of
//                 </option>
//                 <option value="Monaco">Monaco</option>
//                 <option value="Mongolia">Mongolia</option>
//                 <option value="Montenegro">Montenegro</option>
//                 <option value="Montserrat">Montserrat</option>
//                 <option value="Morocco">Morocco</option>
//                 <option value="Mozambique">Mozambique</option>
//                 <option value="Myanmar">Myanmar</option>
//                 <option value="Namibia">Namibia</option>
//                 <option value="Nauru">Nauru</option>
//                 <option value="Nepal">Nepal</option>
//                 <option value="Netherlands">Netherlands</option>
//                 <option value="Netherlands Antilles">
//                   Netherlands Antilles
//                 </option>
//                 <option value="New Caledonia">New Caledonia</option>
//                 <option value="New Zealand">New Zealand</option>
//                 <option value="Nicaragua">Nicaragua</option>
//                 <option value="Niger">Niger</option>
//                 <option value="Nigeria">Nigeria</option>
//                 <option value="Niue">Niue</option>
//                 <option value="Norfolk Island">Norfolk Island</option>
//                 <option value="Northern Mariana Islands">
//                   Northern Mariana Islands
//                 </option>
//                 <option value="Norway">Norway</option>
//                 <option value="Oman">Oman</option>
//                 <option value="Pakistan">Pakistan</option>
//                 <option value="Palau">Palau</option>
//                 <option value="Palestinian Territory, Occupied">
//                   Palestinian Territory, Occupied
//                 </option>
//                 <option value="Panama">Panama</option>
//                 <option value="Papua New Guinea">Papua New Guinea</option>
//                 <option value="Paraguay">Paraguay</option>
//                 <option value="Peru">Peru</option>
//                 <option value="Philippines">Philippines</option>
//                 <option value="Pitcairn">Pitcairn</option>
//                 <option value="Poland">Poland</option>
//                 <option value="Portugal">Portugal</option>
//                 <option value="Puerto Rico">Puerto Rico</option>
//                 <option value="Qatar">Qatar</option>
//                 <option value="Reunion">Reunion</option>
//                 <option value="Romania">Romania</option>
//                 <option value="Russian Federation">Russian Federation</option>
//                 <option value="Rwanda">Rwanda</option>
//                 <option value="Saint Helena">Saint Helena</option>
//                 <option value="Saint Kitts and Nevis">
//                   Saint Kitts and Nevis
//                 </option>
//                 <option value="Saint Lucia">Saint Lucia</option>
//                 <option value="Saint Pierre and Miquelon">
//                   Saint Pierre and Miquelon
//                 </option>
//                 <option value="Saint Vincent and The Grenadines">
//                   Saint Vincent and The Grenadines
//                 </option>
//                 <option value="Samoa">Samoa</option>
//                 <option value="San Marino">San Marino</option>
//                 <option value="Sao Tome and Principe">
//                   Sao Tome and Principe
//                 </option>
//                 <option value="Saudi Arabia">Saudi Arabia</option>
//                 <option value="Senegal">Senegal</option>
//                 <option value="Serbia">Serbia</option>
//                 <option value="Seychelles">Seychelles</option>
//                 <option value="Sierra Leone">Sierra Leone</option>
//                 <option value="Singapore">Singapore</option>
//                 <option value="Slovakia">Slovakia</option>
//                 <option value="Slovenia">Slovenia</option>
//                 <option value="Solomon Islands">Solomon Islands</option>
//                 <option value="Somalia">Somalia</option>
//                 <option value="South Africa">South Africa</option>
//                 <option value="South Georgia and The South Sandwich Islands">
//                   South Georgia and The South Sandwich Islands
//                 </option>
//                 <option value="Spain">Spain</option>
//                 <option value="Sri Lanka">Sri Lanka</option>
//                 <option value="Sudan">Sudan</option>
//                 <option value="Suriname">Suriname</option>
//                 <option value="Svalbard and Jan Mayen">
//                   Svalbard and Jan Mayen
//                 </option>
//                 <option value="Swaziland">Swaziland</option>
//                 <option value="Sweden">Sweden</option>
//                 <option value="Switzerland">Switzerland</option>
//                 <option value="Syrian Arab Republic">
//                   Syrian Arab Republic
//                 </option>
//                 <option value="Taiwan">Taiwan</option>
//                 <option value="Tajikistan">Tajikistan</option>
//                 <option value="Tanzania, United Republic of">
//                   Tanzania, United Republic of
//                 </option>
//                 <option value="Thailand">Thailand</option>
//                 <option value="Timor-leste">Timor-leste</option>
//                 <option value="Togo">Togo</option>
//                 <option value="Tokelau">Tokelau</option>
//                 <option value="Tonga">Tonga</option>
//                 <option value="Trinidad and Tobago">Trinidad and Tobago</option>
//                 <option value="Tunisia">Tunisia</option>
//                 <option value="Turkey">Turkey</option>
//                 <option value="Turkmenistan">Turkmenistan</option>
//                 <option value="Turks and Caicos Islands">
//                   Turks and Caicos Islands
//                 </option>
//                 <option value="Tuvalu">Tuvalu</option>
//                 <option value="Uganda">Uganda</option>
//                 <option value="Ukraine">Ukraine</option>
//                 <option value="United Arab Emirates">
//                   United Arab Emirates
//                 </option>
//                 <option value="United Kingdom">United Kingdom</option>
//                 <option value="United States">United States</option>
//                 <option value="United States Minor Outlying Islands">
//                   United States Minor Outlying Islands
//                 </option>
//                 <option value="Uruguay">Uruguay</option>
//                 <option value="Uzbekistan">Uzbekistan</option>
//                 <option value="Vanuatu">Vanuatu</option>
//                 <option value="Venezuela">Venezuela</option>
//                 <option value="Viet Nam">Viet Nam</option>
//                 <option value="Virgin Islands, British">
//                   Virgin Islands, British
//                 </option>
//                 <option value="Virgin Islands, U.S.">
//                   Virgin Islands, U.S.
//                 </option>
//                 <option value="Wallis and Futuna">Wallis and Futuna</option>
//                 <option value="Western Sahara">Western Sahara</option>
//                 <option value="Yemen">Yemen</option>
//                 <option value="Zambia">Zambia</option>
//                 <option value="Zimbabwe">Zimbabwe</option>
//               </select>
//             </div>
//           </div> */}
//           {/* End col-12 */}

//           {/* <div className="col-md-6">
//             <div className="form-input ">
//               <input
//                 type="text"
//                 name="city"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 required
//               />
//               <label className="lh-1 text-16 text-light-1">City</label>
//             </div>
//             {formik.errors.city && formik.touched.city && (
//               <div className="text-danger">{formik.errors.city}</div>
//             )}
//           </div>

//           <div className="col-12">
//             <div className="form-input">
//               <input
//                 type="text"
//                 name="address"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 required
//               />
//               <label className="lh-1 text-16 text-light-1">Address</label>
//             </div>
//             {formik.errors.address && formik.touched.address && (
//               <div className="text-danger">{formik.errors.address}</div>
//             )}
//           </div>

//           <div className="col-12">
//             <div className="form-input ">
//               <input type="text" name="zip_code" onChange={formik.handleChange} onBlur={formik.handleBlur} required />
//               <label className="lh-1 text-16 text-light-1">
//                 ZIP code/Postal code
//               </label>
//             </div>
//             {formik.errors.zip_code && formik.touched.zip_code && (
//               <div className="text-danger">{formik.errors.zip_code}</div>
//             )}
//           </div> */}
//           {/* End col-12 */}

//           {/* <div className="col-12">
//             <div className="form-input ">
//               <textarea required rows={6} defaultValue={""} />
//               <label className="lh-1 text-16 text-light-1">
//                 Special Requests
//               </label>
//             </div>
//           </div> */}
//           {/* End col-12 */}

//           <div className="col-12">
//             <div className="row y-gap-20 items-center justify-between">
//               <div className="col-auto">
//                 <div className="text-14 text-light-1">
//                   By proceeding with this booking, I agree to GoTrip{" "}
//                   <a
//                     className="text-blue-1 px-1"
//                     href={"/terms-and-conditions"}
//                   >
//                     Terms of Use
//                   </a>{" "}
//                   and{" "}
//                   <a href="/privacy-policy" className="text-blue-1 px-1">
//                     Privacy Policy
//                   </a>
//                   .
//                 </div>
//               </div>
//               {/* End col-12 */}
//             </div>
//           </div>
//           {/* End col-12 */}
//         </div>
//         {/* End .row */}
//       </div>
//       {/* End .col-xl-7 */}

//       <div className="col-xl-5 col-lg-4 mt-30">
//         <div className="booking-sidebar">
//           <BookingDetails />
//         </div>
//       </div>
//       {/*  */}
//     </>
//   );
// };

// export default CustomerInfo;
import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useTranslation } from "react-i18next";

const CustomerInfo = ({ formik }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        {/* <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
          Sign in to book with your saved details or{" "}
          <Link href="/signup" className="text-blue-1 fw-500">
            register
          </Link>{" "}
          to manage your bookings on the go!
        </div> */}
        {/* End register notify */}

        {/* <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2> */}

        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          {t("booking:who_will_be_renting")}
        </h2>
        <p className="text-15 text-light-1">
          {t("booking:provide_personal_details")}
        </p>

        <div className="row x-gap-20 y-gap-20 pt-20">
          {/* <div className="col-12">
            <div className="row">
          
          
            </div>
          </div> */}

          <div className=" col-md-12">
            <div className="form-input">
              <input
                type="text"
                name="first_name"
                value={formik.values.first_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.touched.first_name && formik.errors.first_name
                    ? "border-danger"
                    : ""
                }
                required
              />
              <label className="lh-1 text-16 text-light-1">
                {t("booking:first_name")}
              </label>
            </div>
            {formik.errors.first_name && formik.touched.first_name && (
              <div className="text-danger">{formik.errors.first_name}</div>
            )}
          </div>

          <div className=" col-md-12">
            <div className="form-input">
              <input
                type="text"
                name="last_name"
                value={formik.values.last_name}
                className={
                  formik.touched.last_name && formik.errors.last_name
                    ? "border-danger"
                    : ""
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <label className="lh-1 text-16 text-light-1">
                {t("booking:last_name")}
              </label>
            </div>
            {formik.errors.last_name && formik.touched.last_name && (
              <div className="text-danger">{formik.errors.last_name}</div>
            )}
          </div>
          {/* End col-12 */}

          <div className=" col-md-12">
            <div className="form-input">
              <input
                type="text"
                name="email"
                value={formik.values.email}
                className={
                  formik.touched.email && formik.errors.email
                    ? "border-danger"
                    : ""
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
            {formik.errors.email && formik.touched.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>
          {/* End col-12 */}

          <div className="col-md-12">
            <label className="lh-1 text-16 text-light-1 mb-2 d-block">
              {t("booking:phone")}
            </label>
            <PhoneInput
              country={"ae"} // default country
              name="phone_number"
              value={formik.values.phone_number}
              onChange={(phone) => formik.setFieldValue("phone_number", phone)}
              onBlur={formik.handleBlur}
              inputStyle={{
                width: "100%",
                height: "52px",
              }}
              containerStyle={{ width: "100%" }}
              dropdownStyle={{ zIndex: 9999 }} // ensure dropdown not hidden
              enableSearch
              // other props:
              // masks={{us: '(...) ...-....'}}
              // onlyCountries={['us', 'ca', 'gb']} // if you want specific countries
            />
            {formik.touched.phone_number && formik.errors.phone_number && (
              <div className="text-danger mt-1">
                {formik.errors.phone_number}
              </div>
            )}
          </div>
          {/* <div className=" col-md-6">
            <div className="form-input">
              <input
                type="text"
                name="phone_number"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
            {formik.errors.phone_number && formik.touched.phone_number && (
              <div className="text-danger">{formik.errors.phone_number}</div>
            )}
          </div> */}
          {/* End col-12 */}
          {/* End col-12 */}

          {/* <div className="col-md-6">
            <div className="dropdown js-dropdown">
              <select
                name="country"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                style={{ minHeight: "70px" }}
                className="form-select dropdown__button d-flex items-center rounded-4 border-light px-15 h-50 text-14"
              >
                <option defaultValue>Select Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">
                  Congo, The Democratic Republic of The
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People's Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">
                  Libyan Arab Jamahiriya
                </option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and The Grenadines">
                  Saint Vincent and The Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">
                  South Georgia and The South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">
                  Virgin Islands, British
                </option>
                <option value="Virgin Islands, U.S.">
                  Virgin Islands, U.S.
                </option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
          </div> */}
          {/* End col-12 */}

          {/* <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                name="city"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <label className="lh-1 text-16 text-light-1">City</label>
            </div>
            {formik.errors.city && formik.touched.city && (
              <div className="text-danger">{formik.errors.city}</div>
            )}
          </div>

          <div className="col-12">
            <div className="form-input">
              <input
                type="text"
                name="address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
              />
              <label className="lh-1 text-16 text-light-1">Address</label>
            </div>
            {formik.errors.address && formik.touched.address && (
              <div className="text-danger">{formik.errors.address}</div>
            )}
          </div>

          <div className="col-12">
            <div className="form-input ">
              <input type="text" name="zip_code" onChange={formik.handleChange} onBlur={formik.handleBlur} required />
              <label className="lh-1 text-16 text-light-1">
                ZIP code/Postal code
              </label>
            </div>
            {formik.errors.zip_code && formik.touched.zip_code && (
              <div className="text-danger">{formik.errors.zip_code}</div>
            )}
          </div> */}
          {/* End col-12 */}

          {/* <div className="col-12">
            <div className="form-input ">
              <textarea required rows={6} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div> */}
          {/* End col-12 */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1 mt-20">
                  {t("booking:you_agree_to_terms")}{" "}
                  <a href="/terms-and-conditions" className="text-blue-1">
                    {t("booking:terms_of_service")}
                  </a>{" "}
                  {t("booking:and")}{" "}
                  <a href="/privacy-policy" className="text-blue-1">
                    {t("booking:privacy_policy")}
                  </a>
                  .
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
