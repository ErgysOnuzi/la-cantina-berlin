import MenuCard from '../MenuCard'
import carbonaraImage from "@assets/generated_images/Signature_pasta_dish_04ccdf2e.png";
import antipastiImage from "@assets/generated_images/Antipasti_starter_dish_6afa13e1.png";

export default function MenuCardExample() {
  return (
    <div className="max-w-2xl space-y-4 p-8">
      <MenuCard
        title="Spaghetti Carbonara"
        description="Traditional Roman recipe with pancetta, pecorino cheese, and fresh eggs. A timeless classic that embodies the soul of Italian cuisine."
        price="€14.90"
        category="Pasta"
        image={carbonaraImage}
      />
      <MenuCard
        title="Antipasti Della Casa"
        description="Chef's selection of cured meats, artisanal cheeses, marinated olives, and fresh vegetables served with homemade focaccia."
        price="€18.50"
        category="Starters"
        image={antipastiImage}
      />
      <MenuCard
        title="Osso Buco alla Milanese"
        description="Slow-braised veal shanks in white wine and vegetables, served with creamy risotto and gremolata."
        price="€28.90"
        category="Main Course"
        isAvailable={false}
      />
    </div>
  )
}