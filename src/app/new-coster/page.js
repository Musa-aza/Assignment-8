export default function NewCoasterPage() {
  async function handleSubmit(formValues) {
    "use server";

    const formData = {
      coaster_name: formValues.get("coaster_name"),
      location: formValues.get("location"),
      height: formValues.get("height"),
    };

    console.log(formData);

    await db.query(
      `INSERT INTO coasterrollers (coaster_name, location, height)
        VALUES ($1, $2, $3)`,
      [formData.coaster_name, formData.location, formData.height]
    );

    revalidatePath("/coasters");
    redirect("/coasters");
  }

  return (
    <>
      <h1 className="text-amber-600">
        &quot;Add&quot; a new coaster roller to the family
      </h1>
      <form action={handleSubmit} className="flex flex-col items-center">
        <label htmlFor="coaster_name">Write the name of your coaster: </label>
        <input
          type="text"
          name="coaster_name"
          id="coaster_name"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
        />

        <label htmlFor="location">
          Write the location where your coaster came from:
        </label>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
        />

        <label htmlFor="height">How high is your coaster?</label>
        <input
          type="number"
          name="height"
          id="height"
          placeholder="no spelling mistakes, pls"
          required
          className="text-orange-600"
          min={1}
          step={1}
        />
        <button
          type="submit"
          className="border-rose-400 border-4 bg-yellow-400 text-rose-400 p-2 m-4"
        >
          Submit coaster
        </button>
      </form>
    </>
  );
}
