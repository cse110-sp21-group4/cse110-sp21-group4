# Standup meeting

Date: May 23, 2021
Participants: Zhongkang Fang, Darian Hong, Bozhi Wang, Christopher Vu, RJ Singh, Yang Lu, Tri Tran, Ishaan Gupta
Type: Standup

Change the title to include the date.

# What did we do?

- We have the draggable text box working (on Chrome)
- Calendar (display current date, month, year, week-day) separately
- Left pane button works :)
- Left pane made into a separate component :))

# What are we doing?

- Make Toolbox component with add text button interacting with drag-view and text area via the controller
- Get the right pane from high fidelities as separate component
- Integrate Calendar component

# Potential blockers?

- Compatibility issues: Currently Drag and Drop feature only works as intended on Chrome. In Firefox:
    - Can drag but not drop the textbox successfully
    - Bullets won't get added in the right position (somehow couldn't access top style attribute of text)
        - Possible fix: pass the top, height, width and other style attributes required as parameters
    - The cursor would stay at the end of the text when we click on the text box
- **(GitHub issue 16)**

# Action items

Text box Fixes:

- [ ]  Fix Drag and drop
- [ ]  Fix bullets
- [ ]  Fix cursor movement

Components:

- [ ]  Toolbar
- [ ]  Calendar