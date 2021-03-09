import React, { lazy, Suspense } from "react";

const ProfileMF = lazy(() => import("profile/Profile"));

const Profile = ({ location }) => {
  return (
    <Suspense fallback={<div>Loading Profile</div>}>
      <ProfileMF user={location.state.user} />
    </Suspense>
  );
};

export default Profile;
