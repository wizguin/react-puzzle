import path from 'path'

import { type Configuration } from 'webpack'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'

import ESLintPlugin from 'eslint-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'

interface WebpackEnv {
    [key: string]: any
}

interface WebpackArgs {
    mode?: 'development' | 'production'
}

module.exports = (env: WebpackEnv, argv: WebpackArgs): Configuration & { devServer?: DevServerConfiguration } => {
    const isProduction = argv.mode === 'production'

    return {
        mode: isProduction ? 'production' : 'development',

        entry: './src/index.tsx',
        output: {
            filename: isProduction ? '[name].[contenthash].min.js' : '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            clean: true
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },

        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: './index.html'
            }),
            new ESLintPlugin({
                extensions: ['ts', 'tsx'],
                failOnError: false
            })
        ],

        optimization: isProduction ? {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    terserOptions: {
                        format: {
                            comments: false
                        }
                    },
                    extractComments: false
                })
            ],
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        } : {
            minimize: false
        },

        performance: {
            hints: false
        },

        devServer: {
            static: {
                directory: path.resolve(__dirname),
                publicPath: '/',
                watch: {
                    ignored: [
                        path.resolve(__dirname, '.git'),
                        path.resolve(__dirname, 'node_modules')
                    ]
                }
            },
            host: 'localhost',
            port: 8080,
            hot: false,
            client: {
                overlay: false
            }
        }
    }
}
