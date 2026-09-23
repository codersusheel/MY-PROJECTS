/* =========================================================
   HAPROID DIGITAL ID CARD
   ATM / DIGITAL CARD
   JS + CSS ONLY
========================================================= */

(() => {

    /* =====================================================
       CONFIG
    ===================================================== */

    const PROFILE_ID =
        document.querySelector(
            'meta[name="profile-id"]'
        )?.content?.trim();

    const USERS_JSON =
        "/assets/json/user-card.json";

    const CARD_ID =
        "haproid-id-card";


    /* =====================================================
       GOOGLE SEARCH CONTROL
    ===================================================== */

    if (
        !document.querySelector(
            'meta[name="robots"]'
        )
    ) {

        const meta =
            document.createElement("meta");

        meta.name = "robots";

        meta.content =
            "noindex, nofollow, noarchive, nosnippet";

        document.head.appendChild(meta);
    }


  


    /* =====================================================
       LOAD USER
    ===================================================== */

    async function loadUser() {

        if (!PROFILE_ID) {

            showError(
                "Profile ID is missing."
            );

            return;
        }


        try {

            const response =
                await fetch(
                    USERS_JSON,
                    {
                        cache: "no-store"
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "User data could not be loaded."
                );
            }


            const users =
                await response.json();


            if (!Array.isArray(users)) {

                throw new Error(
                    "Invalid user JSON."
                );
            }


            const user =
                users.find(
                    item =>
                        String(item.id)
                            .toLowerCase() ===
                        String(PROFILE_ID)
                            .toLowerCase()
                );


            if (!user) {

                throw new Error(
                    "User not found: " +
                    PROFILE_ID
                );
            }


            createCard(user);


        } catch (error) {

            console.error(error);

            showError(
                error.message ||
                "Unable to load profile."
            );
        }
    }


    /* =====================================================
       CREATE CARD
    ===================================================== */

    function createCard(user) {

        let container =
            document.getElementById(
                "userDataCard"
            );


        if (!container) {

            container =
                document.createElement(
                    "div"
                );

            container.id =
                "userDataCard";

            document.body.appendChild(
                container
            );
        }


        const profileURL =
            user.profile ||
            `${location.origin}/user/${user.id}/`;


        container.innerHTML = `

            <div class="haproid-wrapper">

                <div
                    class="haproid-card"
                    id="${CARD_ID}"
                >

                    <!-- HEADER -->

                    <div class="haproid-top">

                        <div class="haproid-logo">
                            HAPROID
                        </div>

                        <div class="haproid-type">
                            DIGITAL ID
                        </div>

                    </div>


                    <!-- MAIN -->

                    <div class="haproid-main">

                        <!-- PROFILE -->

                        <div class="haproid-profile">

                            <img
                                src="${safe(user.image)}"
                                alt="${safe(user.name)}"
                                class="haproid-photo"
                                crossorigin="anonymous"
                                draggable="false"
                            >

                            <div
                                class="haproid-profile-info"
                            >

                                <div
                                    class="haproid-verified"
                                >
                                    ✓ ${safe(
            user.verificationStatus ||
            "Verified"
        )}
                                </div>


                                <h2
                                    class="haproid-name"
                                    title="${safe(
            user.name || ""
        )}"
                                >
                                    ${safe(
            user.name ||
            "User"
        )}
                                </h2>


                                <p
                                    class="haproid-role"
                                    title="${safe(
            user.role || ""
        )}"
                                >
                                    ${safe(
            user.role ||
            "Professional"
        )}
                                </p>


                                <span
                                    class="haproid-username"
                                    title="@${safe(
            user.username ||
            user.id
        )}"
                                >
                                    @${safe(
            user.username ||
            user.id
        )}
                                </span>

                            </div>

                        </div>


                        <!-- CONTACT -->

                        <div class="haproid-contact">

                            <!-- EMAIL -->

                            <div
                                class="haproid-contact-item"
                            >

                                <div
                                    class="haproid-contact-icon"
                                >
                                    ✉
                                </div>

                                <div
                                    class="haproid-contact-text"
                                >

                                    <small>
                                        EMAIL
                                    </small>

                                    <strong
                                        title="${safe(
            user.email || ""
        )}"
                                    >
                                        ${safe(
            user.email ||
            "Not available"
        )}
                                    </strong>

                                </div>

                            </div>


                            <!-- PHONE -->

                            <div
                                class="haproid-contact-item"
                            >

                                <div
                                    class="haproid-contact-icon"
                                >
                                    ☎
                                </div>

                                <div
                                    class="haproid-contact-text"
                                >

                                    <small>
                                        PHONE
                                    </small>

                                    <strong
                                        title="${safe(
            user.phone || ""
        )}"
                                    >
                                        ${safe(
            user.phone ||
            "Not available"
        )}
                                    </strong>

                                </div>

                            </div>


                            <!-- LOCATION -->

                            <div
                                class="haproid-contact-item"
                            >

                                <div
                                    class="haproid-contact-icon"
                                >
                                    📍
                                </div>

                                <div
                                    class="haproid-contact-text"
                                >

                                    <small>
                                        LOCATION
                                    </small>

                                    <strong
                                        title="${safe(
            user.location || ""
        )}"
                                    >
                                        ${safe(
            user.location ||
            "Not available"
        )}
                                    </strong>

                                </div>

                            </div>

                        </div>

                    </div>


                    <!-- BOTTOM -->

                    <div class="haproid-bottom">

                        <div
                            class="haproid-id-box"
                        >

                            <span
                                class="haproid-id-label"
                            >
                                HAPROID ID
                            </span>


                            <span
                                class="haproid-id"
                            >
                                ${safe(user.id)}
                            </span>


                            <span
                                class="haproid-location"
                            >
                                Scan QR to connect
                            </span>

                        </div>


                        <div
                            class="haproid-qr"
                            id="haproidQR"
                        ></div>

                    </div>

                </div>


                <!-- DOWNLOAD -->

                <button
                    type="button"
                    id="haproidDownload"
                    class="haproid-download"
                >
                    ↓ Download ID Card
                </button>

            </div>

        `;


        /* =================================================
           QR
        ================================================= */

        createQR(profileURL);


        /* =================================================
           DOWNLOAD EVENT
        ================================================= */

        document
            .getElementById(
                "haproidDownload"
            )
            ?.addEventListener(
                "click",
                downloadCard
            );


        /* =================================================
           BLOCK CARD CONTEXT MENU
        ================================================= */

        const card =
            document.getElementById(
                CARD_ID
            );


        card?.addEventListener(
            "contextmenu",
            event => {

                event.preventDefault();

            }
        );


        card?.addEventListener(
            "dragstart",
            event => {

                event.preventDefault();

            }
        );

    }


    /* =====================================================
       QR CODE
    ===================================================== */

    function createQR(url) {

        const qr =
            document.getElementById(
                "haproidQR"
            );


        if (!qr) return;


        if (
            typeof QRCode ===
            "undefined"
        ) {

            qr.innerHTML = `

                <span
                    style="
                        font-size:7px;
                        color:#777;
                        text-align:center;
                    "
                >
                    QR
                </span>

            `;

            return;
        }


        qr.innerHTML = "";


        new QRCode(
            qr,
            {

                text: url,

                width: 52,

                height: 52,

                colorDark: "#111111",

                colorLight: "#ffffff",

                correctLevel:
                    QRCode.CorrectLevel.H

            }
        );

    }


    /* =====================================================
       DOWNLOAD CARD
    ===================================================== */

    async function downloadCard() {

        const card =
            document.getElementById(
                CARD_ID
            );


        const button =
            document.getElementById(
                "haproidDownload"
            );


        if (!card) return;


        if (
            typeof html2canvas ===
            "undefined"
        ) {

            alert(
                "Download library not loaded."
            );

            return;
        }


        try {

            button.disabled = true;

            button.textContent =
                "Preparing...";


            /* WAIT FOR IMAGES */

            const images =
                card.querySelectorAll(
                    "img"
                );


            await Promise.all(

                [...images].map(
                    image => {

                        if (
                            image.complete
                        ) {

                            return Promise.resolve();

                        }


                        return new Promise(
                            resolve => {

                                image.onload =
                                    resolve;

                                image.onerror =
                                    resolve;

                            }
                        );

                    }
                )

            );


            /* WAIT A LITTLE
               FOR QR RENDER */

            await new Promise(
                resolve =>
                    setTimeout(
                        resolve,
                        150
                    )
            );


            /* CREATE PNG */

            const canvas =
                await html2canvas(
                    card,
                    {

                        scale: 4,

                        useCORS: true,

                        allowTaint: false,

                        /*
                           IMPORTANT:
                           null = transparent
                           outside rounded corners
                        */

                        backgroundColor: null,

                        logging: false,

                        scrollX: 0,

                        scrollY: 0,

                        imageTimeout: 0

                    }
                );


            /* DOWNLOAD */

            const link =
                document.createElement(
                    "a"
                );


            link.download =
                `${PROFILE_ID}-haproid-id-card.png`;


            link.href =
                canvas.toDataURL(
                    "image/png",
                    1
                );


            link.click();


        } catch (error) {

            console.error(
                "HaproID download:",
                error
            );


            alert(
                "ID Card download failed."
            );


        } finally {

            button.disabled = false;

            button.textContent =
                "↓ Download ID Card";

        }

    }


    /* =====================================================
       ERROR
    ===================================================== */

    function showError(message) {

        let container =
            document.getElementById(
                "userDataCard"
            );


        if (!container) {

            container =
                document.createElement(
                    "div"
                );

            container.id =
                "userDataCard";

            document.body.appendChild(
                container
            );

        }


        container.innerHTML = `

            <div class="haproid-error">

                ${safe(message)}

            </div>

        `;

    }


    /* =====================================================
       SECURITY / HTML ESCAPE
    ===================================================== */

    function safe(value) {

        return String(
            value ?? ""
        )

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }


    /* =====================================================
       START
    ===================================================== */

    loadUser();

})();