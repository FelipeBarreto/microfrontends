import React, { lazy, Suspense } from "react";

const ProfileMF = lazy(() => import("profile/Profile"));

const Profile = ({ location }) => {
  const user = location.state.user;
  return (
    <Suspense fallback={<div>Loading Profile</div>}>
      <ProfileMF user={user} />
    </Suspense>
  );
};

export default Profile;
