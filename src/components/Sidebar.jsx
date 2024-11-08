import { Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategory, setSelectedCategory }) => (
  <Stack direction="row" sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}>
    {categories.map((category) => (
      <button className="category-btn" onClick={() => setSelectedCategory(category.name)} style={{ background: category.name === selectedCategory && "#fc1503", color: "#fff" }} key={category.name}>
        <span style={{ color: category.name === selectedCategory ? "#fff" : "#fc1503", marginRight: "14px" }}>{category.icon}</span>

        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.9" }}>{category.name}</span>
      </button>
    ))}
  </Stack>
);
export default Sidebar;

// selectedCategory menyimpan kategori yang sedang dipilih, setSelectedCategory digunakan untuk mengubah kategori yang dipilih.
// diambil pake setSelectedaCategory, masukin ke selectedCategory.
