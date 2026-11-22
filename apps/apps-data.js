/*
 * Single source of truth for ost-consultancy.nl/apps/.
 *
 * To add a new app:
 *   1. Put its 256x256 icon in apps/icons/<id>.png
 *   2. Add one object to OST_APPS.apps below (category must match a categories[].id)
 *   3. Optional: if an App Store listing already links to /<id>/, add a redirect stub
 *      <id>/index.html (copy any existing one and change the id and name).
 * The left menu, app card and privacy row are all generated from this file.
 *
 * App fields: id (URL anchor, /apps/#<id>), name, category, tagline, platforms, icon,
 * appStore (full App Store URL; "" hides the button), description, tips ([question, answer]),
 * privacy { network, stores, note? }.
 */
window.OST_APPS = {
  contactEmail: "info@ost-consultancy.nl",
  coffeeUrl: "https://buymeacoffee.com/yyukan",
  privacyEffective: "22 November 2026",

  categories: [
    { id: "arcade",   title: "Arcade games",        blurb: "Retro action, hand-made levels, no ads." },
    { id: "board",    title: "Board games",         blurb: "Turn-based strategy for one device, two players or vs. computer." },
    { id: "learning", title: "Reading & learning",  blurb: "Pocket references and daily reading." },
    { id: "everyday", title: "Everyday tools",      blurb: "Small, private utilities for daily life." }
  ],

  apps: [
    {
      id: "helicombat1967", name: "Heli Combat 1967", category: "arcade",
      tagline: "Retro chopper rescue game", platforms: "iPhone & iPad", icon: "icons/helicombat1967.png", appStore: "",
      description: "Fly a Cobra attack chopper over six hand-made jungle islands, bomb open the huts and winch eight downed pilots to safety on each. Fuel is your clock.",
      tips: [
        ["How do I fly and shoot?", "Touch the left half of the screen and push: a floating stick appears. Hold GUN to fire, tap BOMB to drop a bomb; the yellow sight shows where it lands."],
        ["How do I rescue the pilots?", "Hover low over a pilot until they climb the rope ladder. Bomb fenced huts open first. Up to eight fit on board; land on the H to drop them off."],
        ["Low on fuel, armour or ammo?", "Land on the H. It refuels, repairs and re-arms the Cobra, paid for with points."],
        ["Why can't I pick a later island?", "Islands unlock in order. Rescue the pilots on an island to unlock the next one."]
      ],
      privacy: { network: false, stores: "Progress, unlocked islands, best scores and the sound setting." }
    },
    {
      id: "aircombat1942", name: "Air Combat 1942", category: "arcade",
      tagline: "Retro WWII arcade shooter", platforms: "iPhone & iPad", icon: "icons/aircombat1942.png", appStore: "",
      description: "A classic vertical-scrolling shoot 'em up. Fly a P-38 Lightning through ten hand-made missions, each ending with a boss. Power up from one gun to a full squadron.",
      tips: [
        ["How do I fly and shoot?", "Drag anywhere on the screen. The plane follows your finger without sitting under it, and the guns fire on their own."],
        ["Why can't I pick a later mission?", "Missions unlock in order. Finish a mission, including its boss, to unlock the next one."]
      ],
      privacy: { network: false, stores: "Progress, unlocked missions and best scores." }
    },
    {
      id: "aircombat", name: "Air Combat", category: "board",
      tagline: "Turn-based air war board game", platforms: "iPhone & iPad", icon: "icons/aircombat.png", appStore: "",
      description: "Two air forces face each other across a board of sea and islands. Bomb the enemy HQ, or shoot down all six bombers and eight of ten fighters. Vs. a friend or the computer at three levels.",
      tips: [
        ["Where are the rules?", "In the game: tap the menu button on the blue plate, then Rules."],
        ["How do I move?", "Tap one of your aircraft, then tap one of the markers that show where it can go."]
      ],
      privacy: { network: false, stores: "Game settings such as opponent and level." }
    },
    {
      id: "seacombat", name: "Sea Combat", category: "board",
      tagline: "Turn-based naval board game", platforms: "iPhone & iPad", icon: "icons/seacombat.png", appStore: "",
      description: "Two fleets of eight ships, each behind its own row of mines. Clear a way through and take every enemy ship off the board. No dice: the same position always gives the same result.",
      tips: [
        ["Where are the rules?", "In the game: tap the round three-line button on the blue plate, then Rules."],
        ["How do I move?", "Tap one of your ships, then tap one of the markers that show where it can go, and pass the device."]
      ],
      privacy: { network: false, stores: "Game settings such as opponent and level." }
    },
    {
      id: "dutchgrammar", name: "Dutch Grammar", category: "learning",
      tagline: "A pocket grammar book of Dutch", platforms: "iPhone & iPad", icon: "icons/dutchgrammar.png", appStore: "",
      description: "76 chapters on phonetics, morphology and syntax, with Dutch examples and tables. Explanations in English, Ukrainian or Romanian.",
      tips: [
        ["How do I find a chapter?", "Pick a part in the bottom bar, then a chapter. Red links open related chapters; the magnifier searches by title."],
        ["How do I change language or text size?", "With the chapter list away, swipe left on a page to open settings."]
      ],
      privacy: { network: false, stores: "Language and text size." }
    },
    {
      id: "wikiquoter", name: "Wiki Quoter", category: "learning",
      tagline: "Random quotes from Wikiquote", platforms: "iPhone", icon: "icons/wikiquoter.png", appStore: "",
      description: "One quotation at a time, in a hand-drawn picture frame, from a random Wikiquote page in English, Spanish or Ukrainian. No buttons, only gestures.",
      tips: [
        ["Gestures", "Swipe left for the next quote, right to go back, down to pick the edition. Tap the author to open the source; double tap to hide them; long press to share."],
        ["Nothing loads.", "Quotes come live from wikiquote.org, so the app needs an internet connection. Swipe to try again."]
      ],
      privacy: { network: true, stores: "Chosen edition and hidden authors.",
        note: 'Downloads random pages from wikiquote.org; Wikimedia receives standard request data such as your IP address (<a href="https://foundation.wikimedia.org/wiki/Policy:Privacy_policy">Wikimedia privacy policy</a>).' }
    },
    {
      id: "workhours", name: "Work Hours", category: "everyday",
      tagline: "Is it open right now?", platforms: "iPhone", icon: "icons/workhours.png", appStore: "",
      description: "Keep the opening hours of the places you visit in one list, and see at a glance whether each is open right now, with photo, address, map and contacts.",
      tips: [
        ["How do I add a place?", "Tap +, then Add Hours for each opening slot. Several slots per day and hours past midnight work."],
        ["Edit or delete a place", "Swipe a row to the left, or open the place and tap Edit."]
      ],
      privacy: { network: false, stores: "Your places, hours and photos.",
        note: 'Camera is used only when you take a photo of a place. Opening a map sends the address to Apple Maps (<a href="https://www.apple.com/legal/privacy/">Apple privacy policy</a>).' }
    },
    {
      id: "beirrational", name: "Be Irrational", category: "everyday",
      tagline: "A wish list for the things you would do now", platforms: "iPhone", icon: "icons/beirrational.png", appStore: "",
      description: "A notepad for what you would like to do, not a schedule. Group wishes into scopes of your life, keep a Now list, park the rest for someday, and watch the progress rings fill.",
      tips: [
        ["How do I use it?", "Add a scope with +, open it and add what you would do now. Open an occupation to set its progress. Swipe left to move it to Someday, Completed or Trash."]
      ],
      privacy: { network: false, stores: "Everything you write in it." }
    }
  ],

  /* Shared FAQ: shown ONCE for all apps. */
  faq: [
    ["How do I get help or report a bug?", 'Email <a href="mailto:info@ost-consultancy.nl">info@ost-consultancy.nl</a>. Mention the app, your device and iOS version. You will get an answer within a few working days.'],
    ["I bought an app on another device. How do I get it here?", "Open the App Store with the same Apple Account and download it again. You don't pay twice."],
    ["Are there ads, subscriptions or in-app purchases?", "No. Every app is a one-time download with no ads and no in-app purchases."],
    ["Do the apps work offline?", "Yes, all except Wiki Quoter, which loads quotes live from wikiquote.org."],
    ["Is my data backed up?", "Your data lives only on your device and is part of its iCloud or computer backup. Deleting an app deletes its data."],
    ["I updated from an older version. Where is my data?", "Updates open the same data as earlier versions. If something is missing, write to us before deleting the app."],
    ["How do I turn the sound off?", "Games follow the silent switch; Heli Combat 1967 also has a sound toggle in Settings."]
  ]
};
