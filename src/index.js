import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square"
//                     onClick={() => this.props.onClick()}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderSquare(i) {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

function rect(props) {
    const {ctx, x, y, width, height} = props;
    ctx.fillRect(x, y, width, height);
}

function text(props) {
    const {ctx, x, y, message} = props;
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "green";
    ctx.textAlign = "center";
    ctx.fillText(message, x, y);
    // Создаем объект изображения
    var img = new Image();
    img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABsCAYAAADNJSRaAAAgAElEQVR4nOWdd1SU1962aQJKnRkYegdRwRJ7710EFRFQmqhgI9bYUWyABRCU3jsMZWgiqIhdYxALir0kMTHGjoKCmuv7I+d865y3neQNwknea63nv3nu/bvv9ew9e/az2cjI/EnJio/XmWk/aY2NhXGK09TxuEybhJ+vN/vD93Kp9msam17T0vKe5uZ3OwCN9q63XVi+3Edv9LDB17paGGFtooe1sQ7dzPSwMtXHyswAKwtjptpNpLKynPfvm8Kam5tt27vmNsfPz09p+KC+dyyMdOlqZkB3S0NszfXpYizG1soYE30RIs2OiARqiITqzJhuf7ympub/3hM1uF9vt84menQ1N6SrqR42Znp0N9Olu5ku3cx0sTTSQkeogrZQBS2hGloiDbZvDYgAtBsaGoYByu3toU0Y0LtXbFdTPWwtDOluoY+tqQ7dTXXobqqNtbE2NhZ6GInV0BGqIBaooCVQZdTIEQ/evXvnISMjI9Pc3Ny1vT18NgwNDUcKhUIfR0dHq0G9bZbbmBvQxUQHWzNdupvq0MNUmx6m2nQzFWOup4FYvQO6go6IBZ3QEqgweeIEnj9/7tzU1DSovb18FjZu3GgyftTAAYN622BjYYC1iS6Ok8bW97Uyp7upLt1MtbAx18HaRIypjhADLVV0NJXRFXRCrNkJHaEqvWw6ExMZHv2+6e3ylpZXfYBO79+/MgeUALX29tgqDB06KKFHVwt6WOhia6pFNxMtbE0N6GVuThcjHbqZi7Ey1cJQR4CuliZigcr/v3SEqpjoazG4X09cHKexfLHP05PHK3j//lV9y4e3L969a0x4//69dXt7bBX69esZbG2qS3dzHWxMtelqIsba1AALI0MsjPSwMtXFQEcdsVAFHaHaPwWlLVBBR/RrWJbG+lia6GNiKGK6wzjKy4s2Njc3zWhsRL+9Pf5hANnhQwYE2VjoY2MmprulHtYmYvS01DHUFaGl2QmxUAVdkRo6QlWE6spo/+3bTluoglikilikirZQBV2BKqb6IixNxVhb6jGgX48Xt25d39rY2PjnD2qq3aRMW2szulvq091Cj66mYgzEGhjrqhO8eRl6Gh3RE3REV6j2a2gitV8DEvznS0+ggq5mRwzFKlhb6GBmrI3/+jWl7e2xVRg7emimtakuthZ62JjpYK4vREugyuiBXag/kcb2Fe6YiTqiraaMUFMF4X8R0N8vXQ1lxGodMBAp0dVCTGczXZYt8bnT3h5bBR1tzU22nQ2xsdChi6kYM0NtxAI1FjqP4W7VAW4cTSQ/ajsOI/tioqOBjkAFHXVl9DSV0dVQRl/QCbGGCmJNdfQEquhpKmGqq4a1mTZWZrokx0Wd468wpzIx1a3tZiXG1kKEtaUherpa6Ksrk7FrJd8di+ZBVQz3jyVwszKOE1nBpAavYNfqBSyaOR7XcQOZNW4gvaxM0FIXYqKjhbmBkK4WBnQ218dpxlS+//aOG/wFxqievbvVdjYV0L+bHt0sdDHS0aSHqZivpVHcO5bInaNx3D0ax72jcTyoTuB+dQLnpWHcrI7n1skE6k+mELDSDUORMpbGWnQx08Pa3IBZjnaPXjz/6XVLS2NSe3tsFfoN7FtrY6FNYsh6Fs6egoGmIp72o6ivSuNQYgA3jiRyrzqJu0diuH0ogruHD3AiczM3j0Zw9/gB7pyK53DuXsy0O+Hpak94SBA150/x3b1b/RoaXs1ranrjBH+B6YGllVVl764GHMsN51RBJKN6mXNOGsmB9W6Er3ej4MAaJKHLqE7ZwrfHE7hdcYDr5bH8dD6bZ7X5PLtSyoWDaViKNZg8ehi3bl7hQ3PjDkCrvb21KtMdHRfamGhRFLmR65UJHEnfzY2jCdRXRnP3RBo/XMjn58sl3D+ZwdNaKTcOJ/L4QilPviniVd0hntcdpkqSgIW2EFsrc1xmTafxzetN0GTY3t5aFScnJ/meFrp4jbbldmUsN47Ec6cqlm+Px/Pk6xxe1ZXwur6C59cO8exaJd8cjOO784WcyA6mMmULh1J3kp+wm67GOvSy7cKpk0efNzc3dwcU2ttbq+Lg5DCzs7GY4Z3F3CiL4UFVDD+cjePl5Swarhfx+kYJb+pKeXu1jJe3Kjl5KJKX9Ud5XVfO468lJO9cRFTgarpbG2JuZkR2dtbzpqamWX+5oEJDQ23GjRz4dOHMkdypSuCHMyk8v5LHq2vFvLpewov6Et5eK+NNbRE/1RZw/kg0z68d5nltCW+vHeTp5YNsWOKCpak2S5b4vqypqZnd1NRk1N6+Pgv2Y/tPiQ5cTH11FD98k8nza4d5efUIr66V86z+IK+vl/PmUgkPT2VSELOGZ3WHeFl3kDfXynlx7Qj5yaH0+6IbEyaMv/SXDQmQTQz1DzpfHsX9M/H8cC6L85nRnEuO5MGRTJ7VH+Z5fQXPa4ppulbBjxfyOZG7h4Yblby+Vs5PlyuoO3eYe7dv2J0+fdoYUG1qajL6U69wLl86Y4gke1d5xcHYmsjwdRtlZGRk1vrO3FSdH0X9kUR+PJXOqrE9WTakD/Gecyjdtoaq9BB+vFrBsdRAfjiTy7OrZVTl7OJZXSkv6g7yQ20F1WXZJ4EO7e2vVfD/ataac6eiPr18UcCLZxIe3pMQFjS//mRRCFcro/jxZA5HgtYxRUkWxw6yOHVQwEEo4GqlhGOFkVyrSqMkaj2nJXs4lruLlzfKeXm9gu9rDnH8YG5Je/trFZYtGGlXkr7szZP78TS9TOZW3U5OV25AEu/H9ZOx3D2VQsPlcioD1zFFSQ7XToqssLBiiqY2pdHh3LlwmJpDSdw4lsjVygP8WFfC8/pSfr5SyA+Xyrl4uvLKh3cfhr0D47+3Cb+t6z1709y14f1763cfPgx78wbtz5fCb2DHuhm1dYdW8OD8Fp7cCqf+fDDS+IXkhS/m1rEk7hxP5tUlKQ8rk/Ed3J3LiXHczCmkOiaFg9HxPLxSy7WTJVytSubWqRTqT+dz+3Q2Ty4Vcv5gDLVnK6+0tND7H9v8rTPzhsbGaS/eNPo2N9O+Y1pyzHar8G2zW87nzqGuchFP6vfw6Fok4VvsSQ6ez4OjMTw4Esnjs2m8ulrOwbggqjMT+fn2TZ4/eMi3dXUcLyuhJDuF8txErpwq4+m9em6fq+TeaSmXq3KoOVl65dXTp/+7oBpeTmt48WJYQ8OLYdBOT9SD6mTljMj1WbE7Z1GTP5urB7357mt/fq6P4nDOGhY5f0HhgZXUVRzg7qkUHtUW8uzWUerP5XGqJJ6TRUmcLcvkaF4yR3JTkCZGcro0nytVFVRlx/Oo9hD3vimgqnQ/166UcOFcIdeuHuFmfVX57dtnY+/cOWff0vJjH3jVB5CXkZGRAZRpaewDyMnIyMj89OjmsdgDu55kpkRJ4Z1JuwQVE+Y7ozxjPRu9e3KxeD61JfO5VbWSl/XhfHdxH2WpX7LEfTD7tnuwe6Mr2ZGr+faihJ/rpby4Wcaza+W8vH6IhuuVvLhSyY9fl1NblsGligxun8zlxY1ybp6N5e7lWD42HqLl7REanlXy+PsSHt6TcuNaHlcvS6i/fpBLF6SXzp8tqKm/cvTa6xf3aG58VMuHpzVfH8v75ezhXNLjw2hpfBrX5iGdrUgQRgXPrM2OcGXHIltit4/nbL4v18r9+P70en74ejM3T6zjYPpcUve5sHbBILKj17BrvQfB670oStnJ/XN5PKnJ42VtLq9r82ioK+FVXRkNdeU8rSnk+68zuFa1l0uH1/OkPphX38bQ8GMqTU+zef8yn5YGKc0NUhpfSnn3upzmhsM0vTrKs0dlvHlazYfX5ziau5dvKlNJPbCdm3XnafOgdvq7zK6QLOFC8QLOSxYSvWMmGSHO1EgXc7XEm5sVc6k76M61ktlcLPAiP8KZmEDPn7av94zydJrSx8tpolfIhsV3csI3cKc6mYenk7l3Mp77Z5J5dCKN749ncqsygbKYlZzKXcXlQ6u4fHQddSe3cuebXTy4HML9q3u4X7eXB9d386A+kO9u7uHbG6F8fyuCn+7H8+LbdCpSN1N3LI28xGCykiPaNqidG+brZOxf8WNtuR+1+a5cyfWiJs+LhKAJRAZN5XjxYi4Wz+BWrgtXs+dyTepNbYErF4s8OZw1j+hdrmxZPT1388b5ziuXuE9evdgzNyVs06PThRHUH4nidnUEt08kc6IgjoQ9WyKjgzdPcJk2ysdxSi+f+bMH+/ivmuaTnrgxQZKxrSY+amVNfLh3jTRhTk1V3rKG6sLlVEuXcqJ4KadKl5Ee4s2NUylUF0cTHRbwtE2DWr/CdV3d6f1cqvDlUoErVyWeXCpw5ox0Gd6zx+LiOYmoxPkcLV7N+SI3aktdqS3y4uHJ9dw9tZlHV/fy+H4SV68mU3Iw5Ke9EatL1qzxtg/Zumbt7nVLUzMitpEbFdIUsmn1xtjY2N88Iy+MC+y8139+n22rnPqEb/Psk7L3yz4BS+xzr5+SEBm8+mlaYmjfz5nLP+E0YZCwOG/X2x9uRXLpsDe1hXO4WjCXywWz+Lp4JbNcZmAwdhoiuxHYzBzLZn9HpMlzOVO8iOvHlvPTle28vR/Fu8cZvHtdQsv7Kl43HufsxWT2Jy4/sn6706Lly6dptla9a33dDySG7SR0x+an7i72bRdU8M7luS+fHuLnh+FcrfLhotSdK4XeXMp3p6Z0Pu6+E1Cxd0BmlguKU+fSe7xj/vIF4ydt/HJkfHLoTC4f28ijq2H8fCOSJ9fDeHH/AI0/J9L8VsK796Xc/zYbqTT87hb/ufFhYetM/2i9WzesGbPDf+PNhV5epj4+Pp1aIYJ/jZ+f88BzZ1N411jMq8cxXD++mpoiby4WenKpcD41BU6sXj+RTjMmI+Pqjrz9Yjr1GBv99/uz9m3Q2bl+ZkRM+Oxn5RJfasoXc6VyAQ/OLedJ3XZe3Yun8cdC3r4o5s2rQxw9vJf9+/3i5s2bYNkmBluLXbuX3W56V8WHlnxePYrn1qkd1BT5ckHqQo3Ui6v5s/nKzwF1uznIOHmhNNWFgc6uP/1HnaAgL9PlCwZ7Hdg2587BlIVcKFpAbak3t46t4uH5Hfx4bRdP7oTx7FEiz54UcO5c3KvAPQti/Pycx7eH79/FbOcRi77/vpyWlkO0vM+n8Wkqd84EcKloPpcK3KnNX8AFqTeunlNQtZuLjOMcOk11xszO6eP/pLtxsYNzmP/03LxY7/fVBfM5U+LFOakbl8q9uXFyGQ+v7OTnR+m8en2Yi5eTSUpbe2HTJq9pAQEB/35LwS72Q/TzJTteNzdX8fFjBS3vimh4ksids2u5LPXkisSDq3nzOFE0jxEzR9Jx6lxkZrii4TQffXuPT4mHTv/L/Uu7A9x6R+3xLksK8+B8wTLO5czna4kXF0sXcPPMWn5+eICGl3m8fXOIWzezKJQGXt6yZd7WiAg/pbbI4DcRvHPJqbeNR3jfXPJPQd0+s4ZLhR5ckThTVzCT0mxvuo0fSkc7X2Sne2PovZyBX27Cd+ueeb+1reQAL+UAX/vtaUHzLlckLOF8ni/fSN25UT2fR1d38uZxIh/fZtLSVMCrF+UcKt9PXHRAqb//wi8+Zwb/ElfnMYvv3Sn90PKhhE+fSvn0sZKWd1Iafkrg1uk11BZ6cCXPiVqpI7EJCzEcOwZFu4Uoz1yK1dK1DFu7DduJTr85qL9THRCgcGDrnOmxO13SJZGenC34kksVS/n20hbefBdJ45NkPjTk8aGxiMaGQ9TUpr/LzNpaExy8aPbnyOF/ZO7cqb0L8/fQ0nKU5uYCPn4o5ZdPlTQ3FfLqcTw3T33FJakHl/JdOFnsy8wlM1GdZIe8w1xEs9fQc3UAw/13MtzNd+0fqSPzwEaT0M2+cen7lt6tyFpNzdH13L+0lad3Q3jxIJJ3z9NpfJPNh5ZKvntYxOHy6NvJsYFBAQELTUNDV3QM37stb19IYG1r5fKf2LhhwfW3jUf49EsRH1sO8qnlCJ8+VvCusYDnj2KoO7ac2gJ3LhXOZV+IJ/oTJqMw0wlFVzfM5m9m4Poghm3eietX/udbo56wgOWa+3d8uTBhn+/hssxlfFOxhhsnNvDoSiDPH4bz+nEi715JaW6q4vnTw9TWpDzbH+hbcO5wJhHB6z5PUH5L5ux99N1RPjYX86Elm4/vDvGp5QQfPlTS1JjHswf7qKtYwsX8BZQkzaf3xEGoTJqD7AwnVD3dsF22nWGb9zJsSxDjfZe2SlD/SHTAiv4Z+xYVl6V4Pz5RvJDao6u5cyGAR/W7ePrtft48S6K5sYATedu5cSKDlH3+BKzxbd2ZuZ/7qBFZKRtefWg6ysf3RfzSXMSnD0f41HyMD80VvH2TwZNr/tQX+3IyP4Dh00ejZO+KvL0bHaa5oTd3Kf02BDHYfxdDNgczcIFvqwf1d0J3rDBIjV+9pSDV+0p1gR81B5dx68Q6vrsUxJ2vg/gmfzu3qpJICdvwdMnsya2zcBfrN81in/eoihj3wQS69uLrqh28a6mk6VMVDR8q+fSxio9NJbx8HMPDC2upzl/E9AWjUZ86Afnp7sg5uKPmvIDOX25gwKZgBm0KZuimIAZ6+3y2oP6R3MjNU4sS1iaXpy9/U1XgR2HybG5V7qOuIpbyrAjWLZu34g83khfkM37f7B63M7xsKHW3IMPFjN3O1kRtmM4PtzL52HKMTx8O876xgMcP9nH5iB/ZyQvRGdsLeWd35Gd4Ij/NHS2PpXyxbgeDNu9m4MZAhm0MZNDctgnq7xxK324tTd7sF751/k93jyVyrjCCzcs8Tu0P3fHHut7+pU5mux27PCia15l8NwOy3UQUuhiTP96S6F4GrDZWJ2neWH6+nsLb53ncvLiNb8oWExHsjO7YIchOn4fsNA+UZnhhungdA7bsYdCW3Qzx38XIDUGM8/2yTYP6O1G7gs8cTNpF+r7NxIbtqPzDgiELxmbkeFhQ5qFH+hwzUr3MKHLuTPEAQ3IM1UnU7sgBw45s7anN5ayN3D2ykQt58ziwyxmD0YOQc1yIjIM7HWfNw2q5/z8FNWZDMHM2bGuXoJb6zl6dnbD32f6daydFBK7/Y29ggld42uxx7fPmkLuYcncdIl27k+DQjaTRRqT11SLBSJFUUQckgk4k6wjZaqhK3qKRXM31IT99KcaTByLrNA9ZB3fUXRdis2b7PwU1YUMwJiOn/O4JZ2tw8Ghh51mOkx1bRSzEa8DydM+ulLrrU+RhQpKTOSVzbJBMMiHOthPxRh1I05YnRyhPulYnUsVKhBsrEDbOmuOxqxk1eyRK011RnjIfwSw/un8VzKCt++jvv4vB/sGM91rwi+fS5UNapdj2ZKdjl4KCeZ0p8TRG6mlOjosxZa6WFIw3ILmrMsl6CmSI5MgRyJAtUCBHKEuGSI69Rhost9ZkxbThGI2ejPoUV5Rd59J51SbGbtzN+PXB9F+zhaGec7e3t8c/jCR2rUbskjEvC7ws/haUBdkuJhx0saRwtC4Z1h1JF8uTK5AnT1MWqbosWVoyFGrIkShWZ4exItuNtenfZxCKDi50nOmGid8Kvti8mRGr1zNu7rICn4CAtllV/Jysn95fFOLWhwIPE8o8jSj0MCdjljHlrlbkD9dG0rkTOSJ58jXlKdCURaohQ7KuDBJNOeI0OhFuqECGqBP23XqgMM0bRcd5mPkso+/ipY2z1q5Nb29/rcaSMV1EIbN7IfUwpszDEKmnJZkuppTNtkIyXJscC2VyNOXI15BDIpBBIpAhSVeGVJECEUI1Ygw6IBEoMNfKDKXJjnQe68KAIdNurtsa0joD6L8LS8Z0EYXN7o7Uw4ASNz2K5lqR696ZXCdjckZokW2hTLamHBJNObKFMmQLZcjVlCFJqMQ+bS1SxR2QiGTYaqjOZFtDfEzM2NhjYEJ7+2p1lozpIgqfY0uJhx6l7jpIvczJ97Qg2V6PrBE6SKxUydP8tetliWTIEshRoCZHikCZ/TqaZIo6kKQrS7JYkRg9BUIMNNkzbvhfL6jAJdNFUXP7UewupsxTF6mXEcWeRmTMNCV9qC4SMzUK1RUo1JAjWyRDmkieLHVFkrQUidFRIEVbgSgDBdK0ZcnWkiNcV589fYYOaG9frU51dYDCbiebKqmXOQc99CnxMKLEw4gCN2tShmqRZa6CRCBP3t+6XqqWPKkiJWLEiiRrKRCjJ0+WUJ40LTkkAkWCzM1uV+7Zo9Levj4LIXNHxaR79qTUw5SD7kaUephQ7GFN+igxSVZKZOl2IFsgR45QhgyRPAd0FYn7W1DRegpI1RXIFCmQqqVB2JiRB9rbz2djm+som/1uA94Ue3eleLYexe6mlHhYkm9nQKJtR9KMFUkVyv46mIs6EGagSJJIkTgdBRJ1FJAI5MkSdSTY2Ihsb+8//185/U+E+k68mOFpTbGHIYVzLShyN6HU2Yy0QZokWymTpqNAjkCWDJECsWJF4rV/HaPSRPKkaMsRJ1JiR5/ee9rbx2cnP2iBY7SbNVJvUwq9LSnzMqfE1YzsMXqkdtcgzUCJbIEcKSIFsjU6EK2jQIJYnnQtBRJ0OhBrKX5e/pWPRXv7aBMWjjRbFefRnTIvQ0rd9ZF6WJM9vSsp/bVJM+9EsrYi6aKO5AgVyBfIIBXIkKPRgV36Ylb2NGnfd2ptyZHYYI39PmOPp3r14JCHLuXuBlTOsSZnuDaZNhok6atwQLcTSdpK5GnIUaAiS6ieBhuG9txLQIBce9ffpsQG+HQKXjC5Ks7NGuk8K0pnm5E/0QDJAD3STdWI1e5IlJ46SdrqhOuKWGVrtrO9a243jkhiNVZO/2LlHo+BZHv1IG2yCblDjck0UCJfXZ5ULTV2GAiYZyIMDfi/9iT9VwQ595q/b4oBu/qrkTrIFIlxR6RqspSoKbHDUPBwl/2Qv8YJO3+EtAB3cfy8Aa/yZ+mQZWdCRA8DUg00yBLKkiWU4YC2OmGDB+1r7zrbnf0eQyPTnM05PF1MRV8twi3FhOgJSddWIllPlgK1juwz0CfUa/rE9q613di7ZJ5J7Kxer/JmGVM5TouSLgICbQ0bQob0idgvVidNKEeuuiwZIlXWdDG8Kgn4Sre9a25zqIntEOU+IlY604p8OyGlfVUJsRaw3WFUqoyMjMze/l+UJGmokSP8dY0qSluVVT0t/+9NDzI3e49KdepGpZ0u2cOVSbNQYr217v3sgF9350pW+XULt+72Q46aEjnaMuQJFNirp0P6Kj/Xdi69bdnu2PvIQSdLSkcISO6mRHhnARsH2Cz/x8+k+HiPDzc1+Jgu6ECGUBaJphp7zM2e5/j8H/kJE7XcYX6Mk21L8URDJD01SdPvxEYbw8cRcyap/8fP+vexWRcmVidVIE+WQJ50oSqb9I2K//LzquJd3mpRc/o/KHY0JXe4DjnmmqQYiAkc1NP3v7snavzw/GSRBjlaCuRoKhCtJeCA3djiK2lpf82FOxkZGZntHuN806d1pXqcJjl9VcnQ70TQF10eJHp7/7eTyrOhocLtVpa1yVqdKFCVQSJQIERPg9Ah/T3bsvY2I87f1Wa/q80bqb0phYP1yTFXILSLDolzZqz6V/fGuzuZBdpavMkQqFAgViRbXYlQfS3Cxgye2Ra1txkPqpOVw+cNqsyeoU3xWF2yehqQadSB5d1Njt+TSH7TAcapc2baRRibfUxXUyRLqwN5qgrEmuk3Htu0asbnrr/NiF3iMD/V0RDpRE1y+miSaK7KXmtDctcsHvV7dLb37GkXrKv1JkfQibJOsmRqK7LVWKt+b58+f/4znlI3ehhEzu77tMBen8IhQrK7qrO/i5Adw/vFUlPzu0+tSHKdmRinokGehiJxWnIk6KoTYWPxTbWPz583LCQS+Z3O/SMyZ5iQMcGKQlt10g3k2WRjfPdMwoH/9YbQtGlTc6J0hORrKpEuUiBdpMju3j1+iXJzndaa9bcZqescvWNdbZGON6agnxCJiQp7TYzxnzje5Y/ong0N7VjgZJ8nEWqSqSlHlkCGDIEKQT07t8uOuz9E4qZF1qGu/V/nTjGhaJAOmRYdiDfVZJmlRWpr6J9b6DkkU6j+S5JIjnx1GeI0OxHQp9ufK6iamtgOu7yHlqdM70rpEAMKuqiQaKrMVhv9pswNi3v9Uf0bqQdEcbbWF+JFyqRrKZCsqcBGU4NfYr3+ZF1v77yRnpHOlhSPN0TaTUCWsRJ7TYVstxu6rDX0E8ePDkjS1iRHU5EsQUcCrXUfpvl4DG0N7TYjzGeC3j7nPj8V2hlR1l+TLEsl4kxV2dm969kAJyfFP6r/dWBg51hL84/5qopI1OSJEahzYOq4Da1Re5tBQIDcDq/eh3Icu3CojzYFVsrEm8myrbPwQ/xcp9Gt0cZOa8vEbIEGhZqyJIgUCDQSn2wN3TYlZOU0twhnS/LH63K4m5hkPXkiuirjP+yL+NbQz1voYRdpqf8mR9iBdC1ZIk20SZg+4c+1TFwcGWAZOWfkywJ7M3L6dSLfqCMZxmqs66FTv8bevlXepOwaYVObZq1BpliWRKEikQMGhreGbpsS6D0wJH9GH4pGm5LZRZF8XXmijbRYO7bPotbQj/actCpyiOGnHCslCrUVCTPUunklIEDcGtptRvrWZeOipluSP0GfIhsxEuMOZOkrEjy03+3W0A/zmaC3f4rN4/z+6hRZKBFrIGjKnuHw51s52DFzQHWJnSGSIapkWahRJFZlp6U2G8cOGNga+lE+49NTx5lS1l2FXAt1ttqa5bSGbpsS6DLQPt6pC2Vj9Mi16UiKkTxpOiICxg3JbQ39aD+7/rHOvT4UjDKgoJsWQZ0Nnp0NDe7eGtptRkBAgFyQ4xdnch30yOmnSZJJBwqMlAjraf02wclJ2BptBM3um5/rYkXOACEJnQ0IHNx3TWvotimbXYY4J07vTt5QATld5ZEYdCDMxIi1A3nw8msAAAN0SURBVAY7tIq+75h58W7WFE9SI2mQLgk9B/9wPj5epzW024wz0avFwa7dv8+wNyKtjwbpZgrEWaqzzsosozoguVX+g1j4lKH3jthZUTZcjX3dRaR7uGxrDd02A5ANnOMQlDK5F2UD9JCYq5JspMHKzqJHxUErWuXEnI3eoyILZg3g0Dh90vqqs3+47bNyv3+jYz9+C/0WLLFx9FvJzEkT2Ny7G4nmBuyxMOeAu6NPa+gXpi8bF+5m3VDqqE+unYA9vYXsmThkfWtotxk7MjNNJvtvf9o3MA69BavQGT2CHkN7MWnCqEsByQGt0uVWzRqRWDSrD6VjhCQOUsO/t+mPu72c/lybNNzXb3afviMMyxXbUXL1Qd7BiQ6OrqhPc6DvbLcNe3fsnXPq3LmaoN27f/cZTLuKi9Vmrlgd7LpsxUevOVPYMcaKyN6mHJg67s+3NbFrr16FI2Z7YunqjZq9Kyp2c+g40R2VMfZofTGwPkNSRHJW5nfTnJ1/9x6BGQE74yfu3seY0CiMfX2xmDyRfiPGMHnJ8pDFAQGqn8PPZ2PD5vVY9LBF2cQC0dBxiO3noDplNqLJThhPsMdh4RK2hYbc+7268SUlZtM2b30zKTqFrpt2oOLmjcwMN2Qd5iCe4sRQJ7eQkJDwwWWlpQdLpNKakD17/D+Hv1bjVWOjz8s3L2eExkcGTXFzfWowbiIadi7IT56F8hRH9KY40GXq9HW/VzcmM2eG45dfYee/C4v5S1F2dEHO0Q05BzfUps5BPMKOAVNm4TF3MctXro+Iioga8Tn8tRrN0BUatGh52vfF+xd2By/VYjjFkQ4Onsg6eNLRwQ3NKU4fdSdNK1EbMNRnUUTElN+iK62u1jTu0uuVbq/BiAeMQH3AMDQnzUBpihMdp81B2c4ZTbtZaI22x2CUfZP1ZMdM38CIbp/bb6vx/FNL8pe79qI50RklO08Up3qiNNUNlalOqE91QG/MaDy9vKW/RWvbzmCP1NyisRERGeohMRljJi5cNqHLzDn3hXbTUZ46HeUZs+jo6E7HiTMwmOyI2dDx3+p+Max9D1n/LQByb5rfnfnuyRMc/VYybIEfA+ctY6DPCoYuWv6D4aQpsSN8fJxCo6MN/rdthEoqhBNXrhkz3HdRrN4U+1jxRPtYnVETYwe4uMd+Mcnh3/aJ+n+Ygss5r5qkmQAAAABJRU5ErkJggg==";
    ctx.drawImage(img, x-150, y-50);


    // ctx.strokeRect(x, y, 300, 50);
    // ctx.fillRect(x, y);

}

class Win extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            x: 0,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.updateCanvas(), 10
        );
    }

    componentDidUpdate() {
        this.state.x = 0;
        // this.updateCanvas();
    }


    updateCanvas() {
        var status = this.props.status;
        const ctx = this.refs.canvas.getContext('2d');
        ctx.clearRect(0, 0, 300, 300);
        // отобразить "дочерние" компоненты
        // rect({ctx, x: 10, y: 10, width: 50, height: 50});
        if (this.state.x <= 150) {
            this.state.x += 1;
        }

        if (this.props.win)
            text({ctx, x: this.state.x, y: 100, message: status});
    }

    render() {
        return (
            <canvas ref="canvas" width={300} height={300}/>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            stepNumber: 0,
            xIsNext: true,
            win: false
        };
    }

    jumpTo(step) {
        this.setState({stepNumber: step, xIsNext: (step % 2) === 0,});
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            stepNumber: history.length, xIsNext: !this.state.xIsNext,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Перейти к ходу #' + move :
                'К началу игры';
            return (
                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>);
        });
        let status;
        let win;

        if (winner) {
            status = 'Выиграл ' + winner;
            this.state.win = true;
        } else {
            this.state.win = false;
            status = 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
                <Win
                    status={status}
                    win={this.state.win}
                />
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Game/>
    ,
    document.getElementById('root')
);

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}