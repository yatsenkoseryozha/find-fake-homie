let counter = 0;
function findFakeHomie() {
  if (counter != 0) return;
  let followers = document.getElementById('set_followers').value.split('\n');
  let following = document.getElementById('set_following').value.split('\n');
  let fake_homies_area = document.getElementById('fake_homies_area');
  let fake_homies_list = new Array;

  for (let i = 0; i < following.length; i++) {
    counter = 0;
    for (let k = 0; k < followers.length; k++) {
      if (following[i] == followers[k]) {
        counter++;
      }
    }
    if (counter == 0) {
      fake_homies_list.push(following[i]);
    }
  }

  for (let i = 0; i < fake_homies_list.length; i++) {
    fake_homies_area.innerHTML += ` <a href="https://www.instagram.com/${fake_homies_list[i]}" id="${fake_homies_list[i]}">${fake_homies_list[i]}</a><br>`;
  }

  fake_homies_area.style.display = "block";

  counter++;
}
