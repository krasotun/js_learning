// BEGIN
const render = (state, { form, input, tasksContainer }) => {
  form.reset();
  input.focus();
  const tasksElements = state.tasks.map((task) => {
    const el = document.createElement("li");
    el.classList.add("list-group-item");
    el.textContent = task.name;
    return el;
  });

  tasksContainer.replaceChildren(...tasksElements);
};

const app = async () => {
  const response = await axios.get(routes.tasksPath());

  const state = {
    tasks: response.data.items,
  };

  const form = document.querySelector("form");
  const input = document.querySelector("input");
  const tasksContainer = document.querySelector("#tasks");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
    };
    try {
      await axios.post(routes.tasksPath(), data);
      state.tasks.unshift(data);
    } catch (error) {
      console.error(error); // eslint-disable-line no-console
    }

    render(state, { form, input, tasksContainer });
  });

  render(state, { form, input, tasksContainer });
};

export default app;
// END
