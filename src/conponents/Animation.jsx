"use client";
export default function Animation() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 5 }}
        className="flex flex-col items-center"
      >
        <h1>Cool animation</h1>
      </motion.div>
    </>
  );
}
