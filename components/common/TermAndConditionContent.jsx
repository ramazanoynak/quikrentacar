"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TermAndConditionContent = () => {
  return (
    <Tabs>
      <div className="row y-gap-30">
        {/* <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button">
                General Terms of Use
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Privacy policy
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Cookie Policy
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Best Price Guarantee
              </Tab>
            </TabList>
          </div>
        </div> */}
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">Terms & Conditions</h1>
              <p>Effective Date: November 26, 2024</p>
              <p className="text-15 text-dark-1 mt-5 mb-15">
                Welcome to Quik Rent A Car. By accessing and using our website,
                you agree to comply with and be bound by the following terms and
                conditions. Please read them carefully before using our
                services.
              </p>
              <h2 className="text-16 fw-500">1. Definitions</h2>
              <p className="text-15 text-dark-1 mt-5">
                The following terms apply:
                <br />
                <ul className="list-disc pl-5">
                  <li>
                    <b className="font-bold">Quik Rent A Car:</b>
                    The owner and manager of the reservation system, providing
                    car hire services to users.
                  </li>
                  <li>
                    <b>User:</b> Any individual or entity using the reservation
                    system to book car rentals.
                  </li>
                  <li>
                    <b>Rental Agreement:</b>The agreement signed between the
                    user and the car rental agency at the time of vehicle
                    pickup.
                  </li>
                </ul>
              </p>
              <h2 className="text-16 fw-500 mt-35">2. Use of the Website</h2>
              <p className="text-15 text-dark-1 mt-5">
                By using this website, you agree to:
                <br />
                <ul className="list-disc pl-5">
                  <li>Use the website only for lawful purposes.</li>
                  <li>
                    Refrain from making speculative or false reservations.
                  </li>
                  <li>Provide accurate personal and payment information.</li>
                </ul>
              </p>
              <h2 className="text-16 fw-500 mt-35">3. Rental Terms</h2>
              <p className="text-15 text-dark-1 mt-5">
                By renting a vehicle through our platform, you agree to the
                following:
                <ul className="list-disc pl-5">
                  <li>
                    You must meet the age and licensing requirements for the
                    rental country.
                  </li>
                  <li>
                    All required documents, including a valid driving license
                    and credit card, must be presented at the pickup location.
                  </li>
                  <li>
                    Vehicles must be returned in the same condition they were
                    rented.
                  </li>
                  <li>
                    Additional fees may apply for fuel, damages, or other
                    services.
                  </li>
                </ul>
              </p>
              <h2 className="text-16 fw-500 mt-35">4. Payment</h2>
              <p className="text-15 text-dark-1 mt-5">
                Payments can be made in one of two ways:
                <ul className="list-disc pl-5">
                  <li>
                    <b>Deposit Bookings:</b> A partial payment is made at the
                    time of reservation, with the remaining balance due at
                    pickup.
                  </li>
                  <li>
                    <b>Fully Prepaid Bookings:</b> The entire amount is paid at
                    the time of booking.
                  </li>
                </ul>
              </p>
              <h2 className="text-16 fw-500 mt-35">5. Cancellation Policy</h2>
              <p className="text-15 text-dark-1 mt-5">
                If you need to cancel your reservation, the following applies:
                <ul className="list-disc pl-5">
                  <li>
                    <b>48 hours or more before pickup:</b> A full refund will be
                    provided.
                  </li>
                  <li>
                    <b>Less than 48 hours before pickup:</b> Refunds are subject
                    to a cancellation fee equivalent to up to 3 days of rental
                    charges.
                  </li>
                  <li>
                    <b> No-shows:</b> No refunds will be issued if you fail to
                    pick up the vehicle or provide required documentation.
                  </li>
                </ul>
              </p>
              <h2 className="text-16 fw-500 mt-35">
                6. Insurance and Coverage
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                We offer optional insurance coverage, including:
                <ul className="list-disc pl-5">
                  <li>Collision Damage Waiver (CDW).</li>
                  <li>
                    Premium Coverage to waive liability for excess charges.
                  </li>
                </ul>
                Details will be provided during the booking process. Users are
                responsible for reviewing and understanding insurance terms
                before purchasing.
              </p>
              <h2 className="text-16 fw-500 mt-35">7. Vehicle Use</h2>
              <p className="text-15 text-dark-1 mt-5">
                The following conditions apply to vehicle use:
                <ul className="list-disc pl-5">
                  <li>
                    Vehicles must only be driven by authorized drivers listed in
                    the rental agreement.
                  </li>
                  <li>
                    Driving under the influence of drugs or alcohol is strictly
                    prohibited.
                  </li>
                  <li>
                    Vehicles must not be used for illegal activities or
                    transported across borders without prior permission.
                  </li>
                </ul>
              </p>
              <h2 className="text-16 fw-500 mt-35">8. Liability</h2>
              <p className="text-15 text-dark-1 mt-5">
                Quik Rent A Car is not responsible for:
                <ul className="list-disc pl-5">
                  <li>
                    Direct or indirect losses resulting from vehicle rental or
                    website usage.
                  </li>
                  <li>
                    Vehicle availability issues caused by third-party car rental
                    agencies.
                  </li>
                </ul>
                Our liability is limited to the amount paid for our services.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                9. Changes to Reservations
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Users can request changes to reservations at least 48 hours
                before pickup. Changes are subject to availability and may
                result in additional charges.
              </p>
              <h2 className="text-16 fw-500 mt-35">10. Governing Law</h2>
              <p className="text-15 text-dark-1 mt-5">
                These terms and conditions are governed by the laws of the
                United Kingdom. Any disputes will be resolved in UK courts.
              </p>
              <h2 className="text-16 fw-500 mt-35">11. Contact Us</h2>
              <p className="text-15 text-dark-1 mt-5">
                If you have questions about these terms, please contact us:
                <br />
                <b>Email:</b> support@quikrentacar.com
              </p>
            </div>
          </TabPanel>
          {/* End  General Terms of Use */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Privacy policy</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </TabPanel>
          {/* End  Privacy policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Cookie Policy</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </TabPanel>
          {/* End  Cookie Policy */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15"> Best Price Guarantee</h1>
              <h2 className="text-16 fw-500">1. Your Agreement</h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                2. Change of Terms of Use
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
              <h2 className="text-16 fw-500 mt-35">
                3. Access and Use of the Services
              </h2>
              <p className="text-15 text-dark-1 mt-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
                <br />
                <br />
                It was popularised in the 1960s with the release of Letraset
                sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </TabPanel>
          {/* End  Best Price Guarantee */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermAndConditionContent;
