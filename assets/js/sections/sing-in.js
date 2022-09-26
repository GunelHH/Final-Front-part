let bg = document.querySelector(".sign-in__left");

let images = [];

images.push(
  "file:///Users/gunelhesenova/Desktop/FinalProject/assets/Images/admin/390-3902495_customer-journey-analytics-online-advertising-hd-png-download.png"
);
images.push(
  "file:///Users/gunelhesenova/Desktop/FinalProject/assets/Images/admin/7f9802af9537f3231ba27012c0ae6b7d.jpeg"
);
images.push(
  "file:///Users/gunelhesenova/Desktop/FinalProject/assets/Images/admin/34cf1ad32139b92ba3a01954560ea743.jpeg"
);
images.push(
  "file:///Users/gunelhesenova/Desktop/FinalProject/assets/Images/admin/8e15ccfcc430923bb67a2865b5a72e8f.png_wh300.png"
);

images.push(
  "file:///Users/gunelhesenova/Desktop/FinalProject/assets/Images/admin/61-612966_b-tracking-results-hd-png-download.png"
);

window.onload = function () {
  const random = Math.floor(Math.random() * images.length);

  bg.style.backgroundImage = `url(${images[random]})`;
};
