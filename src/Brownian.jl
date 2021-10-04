module Brownian

using Distributions
using PDMats
using StatsBase
using FFTW

import Base: convert
import Random: rand!, rand
import Distributions: VariateForm, Univariate, Multivariate, ValueSupport, Discrete, Continuous, Sampleable
import StatsBase: IntegerVector, autocov!, autocov

export BrownianMotion, FBM, FGN, rand!, rand, autocov, chol_update

include("BrownianMotion.jl")
include("FBM.jl")

end 
