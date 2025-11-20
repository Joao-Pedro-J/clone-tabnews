function status(request, response) {
  response.status(200).json({ chave: "O tau do joão é muito lindo" });
}

export default status;
