# Resources
    ## Miro Board
        - https://miro.com/welcomeonboard/Csxok1D58Mv9gDZnHTId76RPJvJLd0Fbkb5PdlCI7qrJY6MBzFUnUByACg4CJrhK

    ## Google doc with original messy notes
        - https://docs.google.com/document/d/1QoyctT0jwruCCSMgRH7DCIeslJTPkQEh9dK5lW2St_o/edit#

    ## Fan wiki
        - https://adventuretime.fandom.com/


# CSS Notes
        - Display: block
        - look up adventure time color palette
        - Set container position: relative then you can move links and stuff around inside by setting to absolute
        - Use percentages (style tag) to put challenge links on different parts of the map

# Plan
<!-- # Home Page (root dir)
    - html
        - Create form for user data (inside a form tag)
        - each q inside a label tag
        - radio buttons for user info (type: radio, name: whatever, value: things to map back )
        - submit button
    - js
        - grab form (query selector) and make var
        - event listener on button. When clicked:
            - store user data in local storage
            - redirect to map page -->
        - quiz data
            - write up of question challenges and options
    # Map Page (map of Ooo)
        - html
            - empty ul
        js
            - grab ul dom element
            - Grab quiz data and make for loop and append to li
            - if all quiz challenges have been completed, redirect to results page (another for loop)
    # Challenge Page
        - html
            - form like home page (with radio and submit buttons)
        - js
            - grab elements with query selector (img will be section img)
            - grab challenge id from URL
                - Use findByID function to find quest in data
            - Quest id determines how to populate the html elements

    # Results
        - html
        - messages.js
            - points to results messages (based on stats)
        - js
            - Display a p for custom ending
            - Use tally to determine which result to show
                for ties, show special message and both/all results? OR pick a random one?