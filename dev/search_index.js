var documenterSearchIndex = {"docs":
[{"location":"#Brownian.jl","page":"Brownian.jl","title":"Brownian.jl","text":"","category":"section"},{"location":"","page":"Brownian.jl","title":"Brownian.jl","text":"Documentation for Brownian.jl","category":"page"},{"location":"","page":"Brownian.jl","title":"Brownian.jl","text":"Modules = [Brownian]\nOrder   = [:function, :type]","category":"page"},{"location":"#Brownian.rand_chol","page":"Brownian.jl","title":"Brownian.rand_chol","text":"rand_chol \n\ngenerates FBM using the method based on Cholesky decomposition. T. Dieker, Simulation of Fractional Brownian Motion, master thesis, 2004. The complexity of the algorithm is O(n^3), where n is the number of FBM samples.\n\n\n\n\n\n","category":"function"},{"location":"#Brownian.rand_fft","page":"Brownian.jl","title":"Brownian.rand_fft","text":"rand_fft \n\ngenerates FBM using fast Fourier transform (FFT). The time interval of FBM is [0, 1] with a stepsize of 2^p, where p is a natural number. The algorithm is known as the Davies-Harte method or the method of circular embedding. R.B. Davies and D.S. Harte, Tests for Hurst Effect, Biometrika, 74 (1), 1987, pp. 95-102. For a more recent publication, see P.F. Craigmile, Simulating a Class of Stationary Gaussian Processes Using the Davies–Harte Algorithm, With Application to Long Memory Processes, Journal of Time Series Analysis, 24 (5), 2003, pp. 505-511. The complexity of the algorithm is O(n*log(n)), where n=2^p is the number of FBM samples.\n\n\n\n\n\n","category":"function"},{"location":"#Brownian.rand_rl","page":"Brownian.jl","title":"Brownian.rand_rl","text":"rand_rl\n\nImplementation of \"exact discrete\" method for simulating Riemann-Liouville fBm Based on Muniandy, S. & Lim, S. Modeling of locally self-similar processes using multifractional Brownian motion of Riemann-Liouville type. Physical Review E 63, 046104. ISSN: 1063-651X (2001). Specifically, Eqn. 17, 18 and 19. From Muniandy (2001), Reimann-Liouville fBm is defined as,\n\nB_H(t)=frac1Gamma(H+05)int^t_0(t-s)^(H-05)dB(s) tgeq0\n\nHere we focus on the discrete time t_j=jDelta t approximation,\n\nB_H(t_j)=frac1Gamma(H+05)sum^j_i=1int^iDelta t_(i-1)Delta t(t_j-tau)^(H-05)dB(tau)\n\nThe exact solution to the interior integral results in a weighting function, implemented here with the :Exact key. An \"improved\" weighting function was proposed by Rambaldi, S. & Pinazza, O. An accurate fractional Brownian motion generator. Physica A 208, 21–30 (1994). We have implemented this here with the :Improved key.\n\n\n\n\n\n","category":"function"}]
}
