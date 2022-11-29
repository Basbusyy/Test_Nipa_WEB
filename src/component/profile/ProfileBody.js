import React from "react";
import ProfileList from "./ProfileList";

function ProfileBody() {
  return (
    <div className="flex flex-wrap gap-5 px-5 pt-5">
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
      <ProfileList />
    </div>
  );
}

export default ProfileBody;
