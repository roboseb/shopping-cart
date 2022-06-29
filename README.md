#Seb's Shopping Cart

---Devlog---

June 27th, 2022

    New day, new project. Took a second of brainstorming and thirty seconds of urinating to come up with a good idea for an interesting shopping cart, and I think I've got one. Remember when there was a panic surrounding furniture on Waifair having people names, and folk assuming that meant Waifair was selling people literally in the furniture? Well I think it would be fun to recreate the store page for an item on Waifair, but the rest of the UI is my style. The project will use a couple APIs to generate items for sale that have names that are comically human, and also give them excessive details that furniture would not normally have listed, such as:
        -birth date (this is funny because technically furniture would
        have a birthdate, it would just be listed as manufacturing date or something)

        -Nationality (same idea)

        -Height

        -Weight

        -Skin colour?

        -Bloodtype

        -Astrological sign

    As an outline, the store will initially generate a few sets of items so that it at least fulfills the project requirements. However, with the use of APIs, it should also be able to generate new items with photos and details. 

June 28th, 2022

    Gonna have to pay rent soon.

    So I've got a pretty straightforward system for generating furniture girls. I really want to find a way to work around the localhost issues with CORS so that I can use more APIs in the future, as this project really would have benefited from some name and other stuff generation. Happy with what I got done in a half day yesterday regardless.

    By the way, new game that stayed up playing last night is Raft. Pretty neat take on open world survival craft. A few similarities to Subnautica in the story and lack of procedural elements. Very fun with friends. 

    Today, I'm gonna try to get all the functionality done. 

    I was struggling with useState again, and decided to do some cooking and let my brain figure out the issue in the background. 
    I ended up coming to a solution pretty quick after returning, as I had a similar problem previously. STILL don't understand how this shit works at all. It's so different from setState, and it's not just the asynchronicity that I'm struggling with. Regardless, the thing works pretty well, just need to do a bunch of styling. Pretty excited for that.



---To-Do---

-Local storage
-item page
-style item page like wayfair
-style rest of the site however
DONE (and tasty)-make pork and rice
-fix double generating items
-add item generation based on keyword
DONE-add cart component
DONE-add cart functionality
-add more info for items (price, age, nationality, sign, blood type)
DONE-remove item from cart