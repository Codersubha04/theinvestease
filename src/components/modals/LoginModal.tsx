import { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";
import * as bootstrap from "bootstrap";
import type { SendEmailEvent } from "@/types/mail-form";
import PopupImage from "/image/Popup/InvestEasePopUp.png"
import "./loginModal.scss";

export default function LoginModal() {
  const modalElement = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const showModal = async () => {
      const modalDom = document.getElementById("modallogin");
      if (!modalDom) return;
      const myModal = new bootstrap.Modal(modalDom, {
        keyboard: false,
      });

      // Show the modal after a delay using a promise
      await new Promise((resolve) => setTimeout(resolve, 2000));
      myModal.show();

      modalElement.current?.addEventListener("hidden.bs.modal", () => {
        myModal.hide();
      });
    };

    showModal();
  }, []);

  const [lang, setLang] = useState("en");

  const [success, setSuccess] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const handleShowMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  const sendEmail = async (e: SendEmailEvent): Promise<void> => {
    e.preventDefault(); // Prevent default form submission behavior
    const email: string = e.target.email.value;

    try {
      const response = await axios.post(
        "https://express-brevomail.vercel.app/api/contacts",
        {
          email,
        },
      );

      if ([200, 201].includes(response.status)) {
        e.target.reset(); // Reset the form
        setSuccess(true); // Set success state
        handleShowMessage();
      } else {
        setSuccess(false); // Handle unexpected responses
        handleShowMessage();
      }
    } catch (error) {
      setSuccess(false); // Set error state
      handleShowMessage();
      e.target.reset(); // Reset the form
    }
  };

  // return (

  //   // <div
  //   //   className="modal fade modalCenter auto-popup"
  //   //   ref={modalElement}
  //   //   id="modallogin"
  //   // >
  //   //   <div className="modal-dialog modal-dialog-centered" role="document">
  //   //     <div className="modal-content modal-xl">
  //   //       <div className="wg-new-letter">
  //   //         <div className="image">
  //   //           <img
  //   //             src="/image/section/img-new-letter.jpg"
  //   //             alt=""
  //   //             className="lazyload"
  //   //             width={440}
  //   //             height={440}
  //   //           />
  //   //         </div>
  //   //         <div className="new-letter-content text-center">
  //   //           <div className="heading">
  //   //             <div className="label text-btn-uppercase color-primary mb-8">
  //   //               Subscribe To Our Newletter!
  //   //             </div>
  //   //             <h5 className="color-on-suface-container">
  //   //               Sign Up For Updates On Our Latest
  //   //               <br />
  //   //               News And Events.
  //   //             </h5>
  //   //           </div>
  //   //           <form onSubmit={sendEmail}>
  //   //             <fieldset>
  //   //               <input
  //   //                 name="email"
  //   //                 type="text"
  //   //                 placeholder="Enter your email address"
  //   //               />
  //   //             </fieldset>
  //   //             <div
  //   //               className={`tfSubscribeMsg  footer-sub-element ${
  //   //                 showMessage ? "active" : ""
  //   //               }`}
  //   //             >
  //   //               {success ? (
  //   //                 <p style={{ color: "rgb(52, 168, 83)" }}>
  //   //                   You have successfully subscribed.
  //   //                 </p>
  //   //               ) : (
  //   //                 <p style={{ color: "red" }}>Something went wrong</p>
  //   //               )}
  //   //             </div>
  //   //             <button
  //   //               type="submit"
  //   //               className="tf-btn style-2 bg-on-suface-container"
  //   //             >
  //   //               <span>Subscribe</span>
  //   //             </button>{" "}
  //   //           </form>
  //   //           <ul className="tf-social radius-50 g-8 color-on-suface-container">
  //   //             <li className="item">
  //   //               <a href="#">
  //   //                 <div className="icon">
  //   //                   <i className="icon-messenger" />
  //   //                 </div>
  //   //               </a>
  //   //             </li>
  //   //             <li className="item">
  //   //               <a href="#">
  //   //                 <div className="icon">
  //   //                   <i className="icon-x" />
  //   //                 </div>
  //   //               </a>
  //   //             </li>
  //   //             <li className="item">
  //   //               <a href="#">
  //   //                 <div className="icon">
  //   //                   <i className="icon-ig1" />
  //   //                 </div>
  //   //               </a>
  //   //             </li>
  //   //             <li className="item">
  //   //               <a href="#">
  //   //                 <div className="icon">
  //   //                   <i className="icon-skype" />
  //   //                 </div>
  //   //               </a>
  //   //             </li>
  //   //             <li className="item">
  //   //               <a href="#">
  //   //                 <div className="icon">
  //   //                   <i className="icon-telegram" />
  //   //                 </div>
  //   //               </a>
  //   //             </li>
  //   //           </ul>
  //   //         </div>
  //   //         <a
  //   //           href="#"
  //   //           data-bs-dismiss="modal"
  //   //           className="icon-new-letter btn-hide-popup"
  //   //         >
  //   //           <i className="icon-close1"> </i>
  //   //         </a>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </div>
  // );

  return (
    <div
      className="modal fade"
      id="modallogin"
      ref={modalElement}
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered custom-modal">
        <div className="modal-content sebi-popup">
          {/* Close Button */}
          <button
            type="button"
            className="btn-close custom-close"
            data-bs-dismiss="modal"
          ></button>

          <div className="popup-body">
            <h2 className="popup-title">SEBI Registered INH000020721</h2>

            <div className="popup-top">
              <div className="left">
                <img src={PopupImage} alt="InvestEase Popup" />
              </div>
            </div>

            <div className="contact-bar">
              <a href="tel:+919477838855" className="contact-item">
                <i className="bi bi-telephone-fill"></i>
                <span>+91-7980561156</span>
              </a>

              <a
                href="https://wa.me/919477838855"
                target="_blank"
                className="contact-item"
              >
                <i className="bi bi-whatsapp"></i>
                <span>+91-7980561156</span>
              </a>
            </div>

            <div className="lang-bar">
              <button
                className={lang === "en" ? "active" : ""}
                onClick={() => setLang("en")}
              >
                ENGLISH
              </button>

              <button
                className={lang === "hi" ? "active" : ""}
                onClick={() => setLang("hi")}
              >
                HINDI
              </button>
            </div>

            <div className="fraud-box">
              {lang === "en" ? (
                <>
                  <h5>Caution | InvestEase Research (SEBI RA)</h5>
                  <p>
                    We do not offer guaranteed returns or unofficial tips.
                    <br />
                    Engage only via official website.
                  </p>
                </>
              ) : (
                <>
                  <h5>सावधानी | InvestEase Research (SEBI पंजीकृत)</h5>
                  <p>
                    हम गारंटीड रिटर्न या अनधिकृत टिप्स नहीं देते।
                    <br />
                    केवल आधिकारिक वेबसाइट से संपर्क करें।
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
