async function fetchProfileData() {


    const url = "https://raw.githubusercontent.com/Valter952/Portifolio-Profissional/refs/heads/main/assets/data/profile.json";
    const fetching = await fetch(url)
    return await fetching.json();            
}
