function r(){let e=JSON.parse(localStorage.getItem("user"));return e&&e.accessToken?{Authorization:"Bearer "+e.accessToken}:{}}export{r as a};
