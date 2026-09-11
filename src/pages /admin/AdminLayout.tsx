import Sidebar from "./components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { handleLogOut as logoutUser } from "../../store/authSlice";

function AdminLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* sidebar */}
      <div className="hidden md:flex flex-col w-64 bg-gray-800">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white font-bold uppercase">
            Digital Dokaan Dashboard
          </span>
        </div>
        <Sidebar />
      </div>
      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
          <div className="flex items-center px-4"></div>

          <button
            type="button"
            onClick={handleLogOut}
            className="mr-4 rounded bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Logout
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default AdminLayout;
