# User Data Form & Message System

## Project Roadmap & Technical Documentation

**Project Status:** Planning / Concept
**Version:** v1.0
**Data Status:** Demo structure only — No real user data added yet

---

## 1. Project Overview

Ye system ek form-based user data management system hoga.

Admin/User form ke through kisi existing user ko select karega. Selected user ka data `users-list.json` se automatically load hoga.

Form submit hone ke baad system do separate data outputs prepare karega:

### Output 1 — All Data

Isme selected user ka complete JSON data + form se submit kiya gaya data ek single structured object me hoga.

### Output 2 — User Message

Selected user ke liye ek clean, short message generate hoga jo future me WhatsApp, Email, notification ya kisi messaging system ke through bheja ja sakta hai.

---

# 2. Main Concept

```text
users-list.json
       ↓
User Selection
       ↓
Form
       ↓
Submit
       ↓
┌───────────────────────┐
│     Data Processor    │
└───────────────────────┘
       ↓
 ┌──────────────┬───────────────┐
 ↓                              ↓
ALL DATA                    USER MESSAGE
 ↓                              ↓
Complete Record             Short Message
 ↓                              ↓
Database / API              WhatsApp / Email
```

---

# 3. Project Goals

System ka main purpose:

* Existing users ko JSON se identify karna
* User data automatically load karna
* Form ke additional data ko collect karna
* Selected user + form data ko combine karna
* Complete data ko ek object me prepare karna
* User ke liye separate message generate karna
* Future me backend/database integration ke liye ready structure banana

---

# 4. Suggested File Structure

```text
project/
│
├── index.html
│
├── Assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── app.js
│   │
│   └── json/
│       └── users-list.json
│
├── data/
│   └── submissions.json
│
└── ROADMAP.md
```

---

# 5. Main Files

## `index.html`

Form aur result/card ka frontend structure.

Responsibilities:

* User selection
* Form fields
* Submit button
* Result display
* Generated message display

---

## `Assets/json/users-list.json`

Existing users ka basic public data.

Example structure:

```json
[
    {
        "id": "Pro-Example-01",
        "name": "Example User",
        "username": "exampleuser",
        "role": "Developer",
        "email": "example@email.com",
        "location": "India",
        "profile": "/profile/example"
    }
]
```

**Note:** Abhi real user data add nahi karna hai.

---

# 6. Form Concept

Form me initially ye fields ho sakte hain:

```text
Select User
Subject
Message
Category
Date
Reference
Additional Information
```

Example:

```text
---------------------------------
User
[ Select User ▼ ]

Subject
[________________________]

Message
[________________________]
[________________________]

Category
[________________________]

Date
[________________________]

Reference
[________________________]

[ Submit ]
---------------------------------
```

---

# 7. User Selection

User dropdown `users-list.json` se dynamically generate hoga.

Flow:

```text
users-list.json
       ↓
Fetch JSON
       ↓
Find Users
       ↓
Create <option>
       ↓
User selects profile
```

Example:

```html
<select id="userSelect">
    <option value="">Select User</option>
</select>
```

JavaScript:

```js
const response = await fetch(
    "/Assets/json/users-list.json"
);

const users = await response.json();
```

---

# 8. Selected User Data

User select karne ke baad system selected user's complete JSON object find karega.

Example:

```js
const selectedUser = users.find(
    user => user.id === selectedId
);
```

Selected user object:

```js
{
    id: "Pro-Example-01",
    name: "Example User",
    username: "exampleuser",
    role: "Developer"
}
```

---

# 9. Form Submit Process

Submit button press hone par:

```text
Submit
  ↓
Validate Form
  ↓
Get Selected User
  ↓
Get Form Data
  ↓
Combine Data
  ↓
Create All Data
  ↓
Create User Message
  ↓
Display Result
```

---

# 10. Output 1 — ALL DATA

All Data me dono sources combine honge:

### User JSON

```text
User Profile
+
```

### Form Data

```text
Subject
Message
Category
Date
Reference
Additional Information
```

Final structure:

```json
{
    "user": {
        "id": "Pro-Example-01",
        "name": "Example User",
        "username": "exampleuser",
        "role": "Developer"
    },

    "form": {
        "subject": "Example Subject",
        "message": "Example Message",
        "category": "General",
        "date": "2026-09-24",
        "reference": "REF-001",
        "additionalInfo": "Example"
    },

    "createdAt": "2026-09-24T00:00:00"
}
```

Ye **All Data** hoga.

---

# 11. Output 2 — USER MESSAGE

Selected user ko bhejne ke liye complete JSON nahi bhejna hai.

System ek clean message prepare karega.

Example:

```text
Hello Example User,

You have received a new message.

Subject: Example Subject

Message:
Example Message

Reference: REF-001

Thank you.
```

Future me ye message:

```text
WhatsApp
Email
SMS
Notification
Internal Inbox
```

me use kiya ja sakta hai.

---

# 12. Two Data Flow

Submit ke baad:

```text
                 FORM SUBMIT
                      │
                      ↓
              Selected User
                      │
                      ↓
             Data Combination
                      │
             ┌────────┴────────┐
             ↓                 ↓
         ALL DATA         USER MESSAGE
             │                 │
             ↓                 ↓
      Full JSON Object    Clean Message
             │                 │
             ↓                 ↓
       Save / API          Send / Notify
```

---

# 13. All Data vs User Message

| Feature          | All Data | User Message    |
| ---------------- | -------- | --------------- |
| User information | Yes      | Selected fields |
| Form information | Yes      | Required fields |
| Internal data    | Yes      | No              |
| Reference        | Yes      | Yes             |
| Created time     | Yes      | Optional        |
| Database use     | Yes      | No              |
| Messaging use    | Optional | Yes             |

---

# 14. Frontend JavaScript Responsibilities

`Assets/js/app.js`:

```text
1. Load JSON
2. Create user dropdown
3. Detect selected user
4. Read form
5. Validate fields
6. Find selected user
7. Create All Data
8. Create User Message
9. Display result
```

---

# 15. Validation

Submit se pehle check:

```text
User selected?
Subject entered?
Message entered?
Required fields complete?
```

Agar required field missing ho:

```text
Please complete all required fields.
```

---

# 16. Result Card

Submit ke baad page par ek result card show ho sakta hai:

```text
---------------------------------------
Submission Created

User:
Example User

User ID:
Pro-Example-01

Reference:
REF-001

Status:
Ready

---------------------------------------

ALL DATA
[ View Data ]

USER MESSAGE
[ View Message ]

---------------------------------------
```

Abhi actual sending nahi hogi.

---

# 17. Current Version

Initial version me:

```text
JSON
  ↓
Frontend
  ↓
Form
  ↓
Generated Output
```

No backend.

No database.

No WhatsApp API.

No email API.

No real user data.

---

# 18. Future Version

Future me architecture:

```text
Frontend
   ↓
Backend API
   ↓
MongoDB
   ↓
Submission Record
   ↓
Notification System
```

---

# 19. Future Database Structure

Future MongoDB collection:

```text
submissions
```

Example:

```json
{
    "submissionId": "SUB-2026-0001",

    "userId": "Pro-Example-01",

    "user": {
        "name": "Example User",
        "username": "exampleuser"
    },

    "form": {
        "subject": "Example Subject",
        "message": "Example Message",
        "category": "General"
    },

    "status": "created",

    "createdAt": "2026-09-24T00:00:00"
}
```

---

# 20. API Planning

Future endpoints:

```text
GET
/api/users

GET
/api/users/:id

POST
/api/submissions

GET
/api/submissions/:id

POST
/api/messages/send
```

---

# 21. Security Plan

Future production version me:

* User data server-side store karna
* Sensitive information public JSON me nahi rakhna
* API authentication
* Input validation
* Rate limiting
* CORS configuration
* Request logging
* Database validation
* Access control

---

# 22. Message Delivery — Future

User message ke possible channels:

```text
Submission
    ↓
Message Generator
    ↓
┌─────────┬─────────┬────────────┐
↓         ↓         ↓
Email   WhatsApp   Notification
```

Actual integration baad me add ki jayegi.

---

# 23. Status System

Submission ke liye status:

```text
draft
created
processing
sent
delivered
failed
```

Example:

```json
{
    "status": "created"
}
```

Future message send hone ke baad:

```json
{
    "status": "sent"
}
```

---

# 24. Reference Number

Har submission ko unique reference diya ja sakta hai.

Example:

```text
HAP-SUB-2026-0001
HAP-SUB-2026-0002
HAP-SUB-2026-0003
```

Format:

```text
HAP-SUB-YEAR-NUMBER
```

---

# 25. Development Roadmap

## Phase 1 — UI

* [ ] Form design
* [ ] User dropdown
* [ ] Submit button
* [ ] Result card
* [ ] Message preview

## Phase 2 — JSON

* [ ] Load users-list.json
* [ ] Populate users
* [ ] Select user
* [ ] Read selected user

## Phase 3 — Data Processing

* [ ] Validate form
* [ ] Combine user + form data
* [ ] Generate All Data
* [ ] Generate User Message

## Phase 4 — Preview

* [ ] Show All Data
* [ ] Show Message
* [ ] Copy All Data
* [ ] Copy Message

## Phase 5 — Backend

* [ ] Node.js
* [ ] Express
* [ ] MongoDB
* [ ] API endpoints
* [ ] Save submissions

## Phase 6 — Messaging

* [ ] Email
* [ ] WhatsApp
* [ ] Notifications
* [ ] Delivery status

---

# 26. Final Concept

The final system should work like this:

```text
USER
  │
  │ selects profile
  ↓
users-list.json
  │
  │ user data
  ↓
FORM
  │
  │ additional information
  ↓
SUBMIT
  │
  ↓
DATA PROCESSOR
  │
  ├───────────────┐
  ↓               ↓
ALL DATA      USER MESSAGE
  │               │
  ↓               ↓
Save/API       Send/Notify
```

---

# 27. Important Current Scope

**Abhi sirf concept aur frontend structure banana hai.**

Do not add:

```text
Real user data
Real phone numbers
Real email sending
WhatsApp API
MongoDB
Authentication
Payment
```

Ye sab future phases me add kiya jayega.

---

# 28. Definition of Done — Initial Version

Initial version tab complete mana jayega jab:

* User JSON se load ho
* Dropdown me users aaye
* User select ho
* Form submit ho
* Selected user data identify ho
* Form data collect ho
* All Data object generate ho
* User Message generate ho
* Dono result screen par dikhein
* Real data/API sending abhi na ho

---

## Project Principle

> **One Form → One Selected User → Two Outputs**

### Output A

**Complete Combined Data**

### Output B

**Clean User Message**

Ye architecture future me HaproID/Haproven ke backend, database aur messaging system ke saath integrate kiya ja sakta hai.
