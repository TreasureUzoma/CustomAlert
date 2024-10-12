CustomAlert Component

This project provides a reusable, customizable alert component for React applications. The CustomAlert component can be used to display alerts with a title, message, and an "Okay" button. It also provides functions to show and close the alert programmatically.

Features:
- Displays a modal-style custom alert with a title, message, and button.
- Allows programmatic control of showing and closing the alert.
- Customizable styling via Tailwind CSS or other CSS frameworks.
- TypeScript support.

Installation:
1. Clone or download the repository.
2. Import the CustomAlert component and necessary functions into your React app.

```bash 
   git clone https://github.com/TreasureUzoma/CustomAlert.git
```
Usage:
To integrate the alert into your React project, follow these steps:

1. Import the CustomAlert component where you want to use it:
```javascript
   import CustomAlert, { showCustomAlert, closeCustomAlert } from "./components/CustomAlert";
```

2. Render the CustomAlert component in your JSX:
```javascript
   <CustomAlert onClose={closeCustomAlert} />
```
3. Use the showCustomAlert function to trigger the alert:
```javascript
   showCustomAlert("Alert Title", "This is the alert message!");
```
Props:
- onClose: A function that is called when the "Okay" button is clicked to close the alert.

Custom Functions:
- showCustomAlert(title: string, message: string): Programmatically show the alert with a specified title and message.
- closeCustomAlert(): Programmatically close the alert.
}

To edit the theme, check out CustomAlertStyle.css