import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <>
      <div class="profilecard">
        <div class="profileinfos">
          <div class="profileimage"></div>
          <div class="profileinfo">
            <div>
              <p class="profilename">John Doe</p>
              <p class="profilefunction">Front-end dev</p>
            </div>
            <div class="profilestats">
              <p class="profileflex profileflex-col">
                Articles
                <span class="profilestate-value">34</span>
              </p>
              <p class="profileflex">
                Followers
                <span class="profilestate-value">455</span>
              </p>
            </div>
          </div>
        </div>
        <button class="profilerequest" type="button">
          Add friend
        </button>
      </div>
    </>
  );
};

export default ProfileCard;
