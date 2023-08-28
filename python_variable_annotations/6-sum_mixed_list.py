#!/usr/bin/env python3
"""
Rask 6:
Calculate the sum of all the elements in a list of integers and floats.
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """
    Returns the sum of elements in a mixed list of integers and floats.

    Args:
        mxd_lst (List[Union[int, float]]): The input mixed list of integers and floats.

    Returns:
        float: The sum of the elements in the mixed list.
    """
    return sum(mxd_lst)
