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
       CSS
    ===================================================== */

    const style =
        document.createElement("style");

    style.textContent = `





    
        * {
            box-sizing:border-box;
        }


        /* ===============================
           CONTAINER
        =============================== */

        #userDataCard {

            width:100%;

            display:flex;

            justify-content:center;

            align-items:center;

            padding:24px 12px;

            user-select:none;

            -webkit-user-select:none;
        }


        /* ===============================
           WRAPPER
        =============================== */

        .haproid-wrapper {

            width:100%;

            max-width:500px;

            display:flex;

            flex-direction:column;

            align-items:center;

            gap:15px;
        }


        /* ===============================
           ATM CARD
        =============================== */

        .haproid-card {

            width:100%;

            aspect-ratio:85.60 / 53.98;

            position:relative;

            overflow:hidden;

            border-radius:20px;

            /* NO OUTER BORDER */
            border:none;

            /* IMPORTANT:
               transparent outside corners */
            background:transparent;

            color:#111111;

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            /* NO OUTER SHADOW
               for clean PNG corners */
            box-shadow:none;

            user-select:none;

            -webkit-user-select:none;

            -webkit-touch-callout:none;
        }


        /* ===============================
           HEADER
        =============================== */

        .haproid-top {

            height:19%;

            width:100%;

            display:flex;

            align-items:center;

            justify-content:space-between;

            padding:0 5%;

            background:#ffffff;

            border-bottom: 1px solid rgb(0 0 0 / 32%);
        }


        .haproid-logo {

            font-size:
                clamp(15px,3.2vw,21px);

            font-weight:900;

            letter-spacing:1.2px;

            white-space:nowrap;
        }


        .haproid-type {

            font-size:
                clamp(6.5px,1.35vw,9px);

            font-weight:800;

            letter-spacing:1.1px;

            color:#777777;

            white-space:nowrap;
        }


        /* ===============================
           MAIN
        =============================== */

        .haproid-main {

            height:56%;

            width:100%;

            display:grid;

            grid-template-columns:
                minmax(0,1.15fr)
                minmax(0,.85fr);

            align-items:center;

            padding:4% 5%;

            background:#ffffff;
        }


        /* ===============================
           PROFILE
        =============================== */

        .haproid-profile {

            width:100%;

            min-width:0;

            display:flex;

            align-items:center;

            gap:12px;

            padding-right:16px;
        }


        .haproid-photo {

            width:66px;

            height:66px;

            flex:0 0 66px;

            border-radius:50%;

            object-fit:cover;

            background:#eeeeee;

            border:2px solid #111111;

            pointer-events:none;

            -webkit-user-drag:none;
        }


        .haproid-profile-info {

            min-width:0;

            overflow:hidden;
        }


        .haproid-verified {

            display:block;

            margin-bottom:4px;

            font-size:8px;

            line-height:1;

            font-weight:800;

            letter-spacing:.55px;

            text-transform:uppercase;

            white-space:nowrap;
        }


        .haproid-name {

            margin:0 0 4px;

            font-size:
                clamp(16px,3.5vw,23px);

            line-height:1.05;

            font-weight:800;

            white-space:nowrap;

            overflow:hidden;

            text-overflow:ellipsis;
        }


        .haproid-role {

            margin:0 0 4px;

            font-size:
                clamp(8px,1.65vw,11px);

            line-height:1.2;

            color:#555555;

            white-space:nowrap;

            overflow:hidden;

            text-overflow:ellipsis;
        }


        .haproid-username {

            display:block;

            font-size:
                clamp(7px,1.45vw,9px);

            line-height:1.1;

            color:#888888;

            white-space:nowrap;

            overflow:hidden;

            text-overflow:ellipsis;
        }


        /* ===============================
           CONTACT
        =============================== */

        .haproid-contact {

            width:100%;

            min-width:0;

            padding-left:17px;

            border-left:
                1px solid
                rgba(0,0,0,.045);
        }


        .haproid-contact-item {

            width:100%;

            display:flex;

            align-items:center;

            gap:7px;

            margin-bottom:7px;

            min-width:0;
        }


        .haproid-contact-item:last-child {

            margin-bottom:0;
        }


        .haproid-contact-icon {

            width:25px;

            height:25px;

            flex:0 0 25px;

            display:flex;

            align-items:center;

            justify-content:center;

            border-radius:7px;

            background:#f3f3f3;

            font-size:11px;
        }


        .haproid-contact-text {

            min-width:0;

            width:
                calc(100% - 32px);
        }


        .haproid-contact-text small {

            display:block;

            margin-bottom:2px;

            color:#999999;

            font-size:6.5px;

            line-height:1;

            font-weight:800;

            letter-spacing:.55px;
        }


        .haproid-contact-text strong {

            display:block;

            width:100%;

            font-size:
                clamp(7px,1.6vw,10px);

            line-height:1.2;

            font-weight:700;

            overflow:hidden;

            text-overflow:ellipsis;

            white-space:nowrap;
        }


        /* ===============================
           BOTTOM
        =============================== */

        .haproid-bottom {

            height:25%;

            width:100%;

            display:flex;

            align-items:center;

            justify-content:space-between;

            padding:0 5%;

            background:#111111;

            color:#ffffff;
        }


        .haproid-id-box {

            min-width:0;

            flex:1;

            padding-right:12px;
        }


        .haproid-id-label {

            display:block;

            margin-bottom:3px;

            color:#999999;

            font-size:6.5px;

            line-height:1;

            font-weight:800;

            letter-spacing:.7px;
        }


        .haproid-id {

            display:block;

            max-width:100%;

            font-size:
                clamp(8px,1.75vw,11px);

            line-height:1.2;

            font-weight:800;

            letter-spacing:.2px;

            overflow:hidden;

            text-overflow:ellipsis;

            white-space:nowrap;
        }


        .haproid-location {

            display:block;

            margin-top:4px;

            color:#bbbbbb;

            font-size:
                clamp(6.5px,1.35vw,8.5px);

            line-height:1.1;

            white-space:nowrap;
        }


        /* ===============================
           QR
        =============================== */

        .haproid-qr {

            width:60px;

            height:66px;

            flex:0 0 60px;

            padding:4px;

            background:#ffffff;

            border-radius:8px;

            display:flex;

            align-items:center;

            justify-content:center;

            overflow:hidden;
        }


        .haproid-qr img,
        .haproid-qr canvas {

            width:52px !important;

            height:58px !important;

            display:block;
        }


        /* ===============================
           DOWNLOAD BUTTON
        =============================== */

        .haproid-download {

            width:100%;

            min-height:44px;

            border:0;

            border-radius:11px;

            background:#111111;

            color:#ffffff;

            font-size:12px;

            font-weight:700;

            cursor:pointer;

            transition:.2s ease;
        }


        .haproid-download:hover {

            transform:translateY(-2px);
        }


        .haproid-download:disabled {

            opacity:.55;

            cursor:wait;

            transform:none;
        }


        /* ===============================
           ERROR
        =============================== */

        .haproid-error {

            padding:20px;

            color:#777777;

            font-size:13px;

            text-align:center;
        }


        /* ===============================
           MOBILE
        =============================== */

        @media(max-width:500px) {

            #userDataCard {

                padding:
                    18px 8px;
            }


            .haproid-card {

                border-radius:17px;
            }


            .haproid-main {

                grid-template-columns:
                    minmax(0,1.12fr)
                    minmax(0,.88fr);

                padding:
                    4% 4%;
            }


            .haproid-profile {

                gap:8px;

                padding-right:9px;
            }


            .haproid-photo {

                width:56px;

                height:56px;

                flex-basis:56px;
            }


            .haproid-contact {

                padding-left:9px;
            }


            .haproid-contact-item {

                gap:5px;

                margin-bottom:6px;
            }


            .haproid-contact-icon {

                width:21px;

                height:21px;

                flex-basis:21px;

                border-radius:6px;

                font-size:9px;
            }


            .haproid-contact-text {

                width:
                    calc(100% - 26px);
            }


            .haproid-contact-text small {

                font-size:5.8px;
            }


            .haproid-contact-text strong {

                font-size:6.5px;
            }


            .haproid-qr {

                 width: 60px;
                 height: 70px;
                flex-basis:51px;

                border-radius:4px;
            }


            .haproid-qr img,
            .haproid-qr canvas {

                width:43px !important;

                height:43px !important;
            }
        }


        /* ===============================
           SMALL MOBILE
        =============================== */

        @media(max-width:360px) {

            .haproid-photo {

                width:49px;

                height:49px;

                flex-basis:49px;
            }


            .haproid-profile {

                gap:6px;
            }


            .haproid-contact {

                padding-left:7px;
            }


            .haproid-contact-icon {

                width:19px;

                height:19px;

                flex-basis:19px;

                font-size:8px;
            }


            .haproid-contact-text {

                width:
                    calc(100% - 24px);
            }


            .haproid-contact-text strong {

                font-size:6px;
            }


            .haproid-qr {

                width:47px;

                height:47px;

                flex-basis:47px;
            }


            .haproid-qr img,
            .haproid-qr canvas {

                width:40px !important;

                height:40px !important;
            }
        }

    `;

    document.head.appendChild(style);


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