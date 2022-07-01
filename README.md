#Seb's Shopping Cart

---Features---

    -Remember when people though waifair was selling people in cabinets?
    this is that.

    -Functional store page where you can add items to cart, adjust the
    amount you add, and remove items.

    -Furniture images fetched via Unsplash API

    -Store item info generated randomly from sets of name and colours,
    and price randomized as well.

    -Show/hide cart

    -Dynamic cart colours based on background

    -Home page with fake store info.

    -Red text on the home page either spazzes out or just grows on hover, both look cool!

    -Nice colour palette, shout out to coolors.co

    -All kinds of little animations as usual

    -Hidden option to generate your very own item page with an image
    based on your chosen keyword!

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

June 29th, 2022

    My left ring finger is messed up. Yesterday, many of my fingers hurt but today it's just that one. I had a moment where I though I might have that disease where your body just slowly turns to bone. Probably an overreaction. 

    There's something way too fun about recreating a webpage. I feel like a counterfeiter. With devtools, it's even easier than counterfeiting because so many of the details I can match exactly. I can measure exact widths and heights of the layout, and I can copy most colours exactly. I think my font is close, but it's obviously not the same. 

June 30th, 2022

    Hey, welcome to the final day! Just finished up the cart, and I like the look of it. Took some iteration to have it roughly match both the waifair item page and also the overall site styling. But I think I got there.

    Yeesh, I really started having a proper vision for the site when
    I started writing out the little blurbs on the home page. It's pretty gross actually, in a way. The little furniture girl I drew
    probably doesn't help. Welp. It's an asthetic I guess. And it looks pretty solid as usual, according to me. I nice test I've been using for the style I'm looking for is imagining any page from a site on a shirt. Would I buy the shirt if I came across it in a thrift store? If yes, probably, it passes the test. Even the little red furniture girl might be a step above my usual character art for these.

    That's it, two more projects for the full-stack javascript course.



---To-Do---

CANCEL-Local storage
DONE-item page
DONE-style item page like wayfair
DONE-style rest of the site however
DONE (and tasty)-make pork and rice
DONE-fix double generating items
DONE-add item generation based on keyword
DONE-add cart component
DONE-add cart functionality
DONE-add more info for items (price, age, nationality, sign, blood type)
DONE-remove item from cart
CANCEL-loading screen for store
DONE-fix image ratio bug