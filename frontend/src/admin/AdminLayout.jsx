import { useState } from "react";
import "./AdminLayout.css";
import Dashboard from "./dashboard";
import ProductManagement from "./ProductManagement";
import CategoryManagement from "./CategoryManagement";
import GalleryManagement from "./GalleryManagement";
import BannerManagement from "./BannerManagement";
import OrderManagement from "./OrderManagement";

const TABS = [
  { key: "dashboard", label: "Dashboard" },
  { key: "products", label: "Products" },
  { key: "categories", label: "Categories" },
  { key: "gallery", label: "Gallery" },
  { key: "banners", label: "Banners" },
  { key: "orders", label: "Orders" },
];

function AdminLayout() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "products":
        return <ProductManagement />;
      case "categories":
        return <CategoryManagement />;
      case "gallery":
        return <GalleryManagement />;
      case "banners":
        return <BannerManagement />;
      case "orders":
        return <OrderManagement />;
      default:
        return null;
    }
  };

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <h2 className="admin-brand">Admin Panel</h2>
        <nav>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              className={`admin-nav-item ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="admin-content">{renderTab()}</main>
    </div>
  );
}

export default AdminLayout;