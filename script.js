const btn_refresh = document.querySelector(".btn-clear");
let img_display = document.querySelector(".user-avatar");
let name_display = document.querySelector(".user-name");
let loc_display = document.querySelector(".user-loc");
let email_display = document.querySelector(".user-email");

reload(); // Fetch data when opening page
btn_refresh.addEventListener("click", function (event) {
  reload();
});

function reload() {
  $.ajax({
    url: "https://randomuser.me/api/",
    method: "GET",
    dataType: "json",
    success: onSuccess,
    error: function (thrownError) {
      console.log(thrownError);
    },
  });
}

function onSuccess(data) {
  let name = Object.values(data.results[0].name).join(" ");
  let loc_street = Object.values(data.results[0].location.street).join(", ");
  let loc = Object.values(data.results[0].location).slice(1, 4).join(", ");
  loc = loc_street + ", " + loc;
  let email = data.results[0].email;
  let img_src = data.results[0].picture.large;
  img = `<img src="${img_src}"></img>`;

  img_display.innerHTML = img;
  name_display.innerHTML = "Name: " + name;
  loc_display.innerHTML = "Location: " + loc;
  email_display.innerHTML = "Email: " + email;
}