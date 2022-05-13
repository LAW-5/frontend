import Head from "next/head";
import Banner from "../../components/Banner";
import Navbar from "../../components/Navbar";
import NotificationCard from '../../components/NotificationCard';
import UserDashboardDrawer from "../../components/UserDashboardDrawer";

const NotificationUser = () => {
  return (
    <>
      <Head>
        <title>User Dashboard | EXIT COMPUTER MANGO TWO</title>
      </Head>
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
        <main className="mx-auto max-w-6xl pt-4">
          <Banner title="User Dashboard">
            <div className="flex justify-center">
              <label
                htmlFor="user-dashboard-drawer"
                className="mx-auto btn btn-primary rounded-lg mt-4"
              >
                MENU
              </label>
            </div>
          </Banner>
          <h2 className="my-8 text-2xl font-bold text-center">Notification</h2>
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
          <NotificationCard />
        </main>
      </div>
      <UserDashboardDrawer />
    </>
  );
};

export default NotificationUser;
