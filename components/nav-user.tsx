/* eslint-disable @next/next/no-img-element */
import { useTrans } from "@/Providers/useTrans";
import { useLocalePath } from "@/utils/locale";
import Link from "next/link";
// import FullLoading from "./loading/full-loading";
import PrefsBtns from "./prefs-btns";

/**
 * NavUser component displays the user navigation menu with profile, dashboard, and logout.
 */
const NavUser: React.FC = () => {
  const t = useTrans().trans;
  // TODO: Replace with actual user data
  const userName = "Rakan";
  const userImage = "https://ui-avatars.com/api/?name=R";

  return (
    <div className="nav-user">
      <div className="top">
        <img alt="user image" src={userImage} width={40} height={40} />
        <p>{userName}</p>
      </div>

      <div className="show">
        <div className="bottom">
          <ul>
            <li>
              <Link href={useLocalePath("/user")}>
                <i className="ri-user-line"></i>
                {t.components.navUser.list.profile}
              </Link>
            </li>
            <li>
              <Link href={useLocalePath("/dashboard/active")}>
                <i className="ri-dashboard-2-line"></i>
                {t.components.navUser.list.dashboard}
              </Link>
            </li>
            <hr />
          </ul>

          <button className="logout">
            <i className="ri-logout-circle-r-line"></i>
            {t.components.navUser.list.logout}
          </button>
          {/* <FullLoading /> */}
        </div>
        <div className="btns">
          <PrefsBtns />
        </div>
      </div>
    </div>
  );
};

export default NavUser;
