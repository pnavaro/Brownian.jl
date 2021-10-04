using Documenter
using Brownian

makedocs(
    sitename = "Brownian",
    format = Documenter.HTML(),
    modules = [Brownian]
)

deploydocs(
    repo = "github.com/pnavaro/Brownian.jl.git"
)
