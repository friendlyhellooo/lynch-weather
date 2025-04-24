function Header() {
  return (
    <header class="flex items-center justify-between p-4 bg-gray-800">
      <button class="text-xl font-bold hover:text-red-400"> x </button>
      <h1 class="text-2l tracking-wide"> David Lynch Weather Report </h1>
      <div class="w-6" /> {/* Spacer */}
    </header>
  );
}

export default Header;
