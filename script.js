import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabase = createClient(
    "https://hmnrbfgcfdavmpxzjnyk.supabase.co",
    "sb_publishable_RTQ1fk82Dls6sk7e6Y-dwg_ekqC-jra"
);

const button = document.getElementById("button");

button.addEventListener("click", async () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cell = document.getElementById("cell").value;

    const { data, error } = await supabase
        .from("pacientes")
        .insert([
            { name, email, cell }
        ]);

    if (error) {
        console.error(error);
        alert("Erro ao criar usuário");
    } else {
        alert("Usuário criado!");
        console.log(data);
    }
});