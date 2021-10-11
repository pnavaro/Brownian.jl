using Brownian
using Test

@testset "Brownian" begin

t = LinRange(0, 1, 5)
p = BrownianMotion(t)

rand(p)
rand([p, p])

@test true

end
